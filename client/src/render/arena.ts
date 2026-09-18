import * as THREE from 'three';
import {
  arenaPlayerForEdge,
  playfieldRadius,
  playfieldSides,
  pointOnEdge,
  polygonEdges,
  regularPolygonVertices,
} from '../../../shared/geometry';
import { ARENA_RADIUS, BALL_RADIUS, PADDLE_DEPTH } from '../../../shared/constants';

type ArenaMaterialKit = {
  floor: THREE.MeshBasicMaterial;
  floorGlow: THREE.MeshBasicMaterial;
  frame: THREE.MeshBasicMaterial;
  frameTrim: THREE.MeshBasicMaterial;
  grid: THREE.MeshBasicMaterial;
  guide: THREE.MeshBasicMaterial;
  cyan: THREE.MeshBasicMaterial;
  magenta: THREE.MeshBasicMaterial;
  white: THREE.MeshBasicMaterial;
};

function material(color: number, opacity = 1, additive = false) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    depthWrite: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    side: THREE.DoubleSide,
  });
}

function box(width: number, height: number, depth: number, mat: THREE.Material) {
  return new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), mat);
}

function polygonShape(sides: number, radius: number) {
  const vertices = regularPolygonVertices(sides, radius);
  const shape = new THREE.Shape();
  vertices.forEach((vertex, index) => {
    if (index === 0) shape.moveTo(vertex.x, vertex.y);
    else shape.lineTo(vertex.x, vertex.y);
  });
  shape.closePath();
  return shape;
}

function polygonPlate(sides: number, radius: number, mat: THREE.Material, z: number) {
  const mesh = new THREE.Mesh(new THREE.ShapeGeometry(polygonShape(sides, radius)), mat);
  mesh.position.z = z;
  return mesh;
}

function ring(radius: number, thickness: number, mat: THREE.Material, z: number, segments = 96) {
  const mesh = new THREE.Mesh(new THREE.RingGeometry(radius - thickness, radius + thickness, segments), mat);
  mesh.position.z = z;
  return mesh;
}

function placeOnEdge(
  object: THREE.Object3D,
  edge: ReturnType<typeof polygonEdges>[number],
  t: number,
  inwardOffset: number,
  z: number,
) {
  const center = pointOnEdge(edge, t);
  object.position.set(center.x + edge.inward.x * inwardOffset, center.y + edge.inward.y * inwardOffset, z);
  object.rotation.z = edge.angle;
}

function makeGuideLine(length: number, color: number, dashed = false) {
  const group = new THREE.Group();
  const dashCount = dashed ? 12 : 1;
  for (let index = 0; index < dashCount; index += 1) {
    const segmentLength = dashed ? length / (dashCount * 1.85) : length;
    const x = dashed
      ? -length / 2 + (index + 0.5) * (length / dashCount)
      : 0;
    const segment = box(segmentLength, 0.025, 0.015, material(color, dashed ? 0.48 : 0.22, true));
    segment.position.x = x;
    group.add(segment);
  }
  return group;
}

function makeEdgeModule(
  edge: ReturnType<typeof polygonEdges>[number],
  color: number,
  playerIndex: number,
  mats: ArenaMaterialKit,
) {
  const group = new THREE.Group();
  const hasPlayer = playerIndex >= 0;
  const panelColor = hasPlayer ? color : 0x514a86;
  const edgeLength = edge.length;
  const armorLength = edgeLength * 0.94;

  const outerArmor = box(armorLength, 0.46, 0.12, mats.frame);
  const innerArmor = box(edgeLength * 0.88, 0.16, 0.1, mats.frameTrim);
  const outerGlow = box(armorLength * 0.96, 0.07, 0.04, material(panelColor, hasPlayer ? 0.5 : 0.18, true));
  const innerGlow = box(edgeLength * 0.78, 0.035, 0.035, material(panelColor, hasPlayer ? 0.58 : 0.16, true));

  outerArmor.position.y = -0.34;
  innerArmor.position.y = -0.08;
  outerGlow.position.y = -0.58;
  innerGlow.position.y = 0.03;
  group.add(outerArmor, innerArmor, outerGlow, innerGlow);

  [-1, 1].forEach((side) => {
    const cap = box(Math.min(0.44, edgeLength * 0.12), 0.54, 0.14, mats.frame);
    cap.position.set(side * edgeLength * 0.42, -0.28, 0.02);
    cap.rotation.z = side * 0.18;
    group.add(cap);
  });

  if (hasPlayer) {
    const laneGlow = box(edgeLength * 0.72, 0.045, 0.035, material(panelColor, 0.24, true));
    const laneInner = box(edgeLength * 0.62, 0.024, 0.03, material(0xffffff, 0.36, true));
    laneGlow.position.y = 0.34;
    laneInner.position.y = 0.48;
    group.add(laneGlow, laneInner);

    for (let index = 0; index < 9; index += 1) {
      const tick = box(0.055, 0.024, 0.06, material(index % 2 === 0 ? panelColor : 0xffffff, 0.32, true));
      tick.position.set((index - 4) * edgeLength * 0.07, 0.39, 0.07);
      group.add(tick);
    }
  }

  placeOnEdge(group, edge, 0.5, -0.2, 0.12);
  return group;
}

function makeCornerJoints(edges: ReturnType<typeof polygonEdges>, mats: ArenaMaterialKit) {
  const group = new THREE.Group();
  edges.forEach((edge) => {
    const joint = box(0.5, 0.38, 0.12, mats.frameTrim);
    joint.position.set(edge.a.x - edge.inward.x * 0.28, edge.a.y - edge.inward.y * 0.28, 0.16);
    joint.rotation.z = edge.angle + 0.2;
    group.add(joint);
  });
  return group;
}

function makeGrid(radius: number, mats: ArenaMaterialKit) {
  const group = new THREE.Group();
  const span = radius * 2.35;
  const step = 0.64;
  const count = Math.floor(span / step);
  for (let index = -count; index <= count; index += 1) {
    const offset = index * step;
    const major = index % 4 === 0;
    const horizontal = box(span, major ? 0.018 : 0.01, 0.01, major ? mats.grid : material(0x1b75ff, 0.1, true));
    const vertical = box(major ? 0.018 : 0.01, span, 0.01, major ? mats.grid : material(0xff3df2, 0.075, true));
    horizontal.position.set(0, offset, -0.16);
    vertical.position.set(offset, 0, -0.16);
    group.add(horizontal, vertical);
  }
  return group;
}

function makeRadials(edges: ReturnType<typeof polygonEdges>, playerCount: number, colors: number[]) {
  const group = new THREE.Group();
  edges.forEach((edge, index) => {
    const midpoint = pointOnEdge(edge, 0.5);
    const length = Math.hypot(midpoint.x, midpoint.y);
    const playerIndex = arenaPlayerForEdge(index, playerCount);
    const color = playerIndex >= 0 ? colors[playerIndex % colors.length] : 0x224dff;
    const guide = makeGuideLine(length * 0.86, color, true);
    guide.position.set(midpoint.x * 0.43, midpoint.y * 0.43, -0.02);
    guide.rotation.z = Math.atan2(midpoint.y, midpoint.x);
    group.add(guide);
  });
  return group;
}

export function createArenaVisuals(playerCount: number, colors: number[]) {
  const group = new THREE.Group();
  const arenaSides = playfieldSides(playerCount);
  const radius = playfieldRadius(playerCount, ARENA_RADIUS);
  const edges = polygonEdges(arenaSides, radius);
  const mats: ArenaMaterialKit = {
    floor: material(0x050b18, 0.92),
    floorGlow: material(0x041d3e, 0.28, true),
    frame: material(0x090819, 0.96),
    frameTrim: material(0x1a1750, 0.82),
    grid: material(0x27f5ff, 0.16, true),
    guide: material(0xffffff, 0.18, true),
    cyan: material(0x27f5ff, 0.36, true),
    magenta: material(0xff3df2, 0.42, true),
    white: material(0xffffff, 0.52, true),
  };

  const floorGlow = polygonPlate(arenaSides, radius * 1.08, mats.floorGlow, -0.22);
  const floor = polygonPlate(arenaSides, radius * 0.98, mats.floor, -0.18);
  const outerTrace = polygonPlate(arenaSides, radius * 1.105, material(0x121045, 0.38), -0.2);
  group.add(makeGrid(radius, mats), outerTrace, floorGlow, floor);

  const radar = ring(radius * 0.42, 0.012, material(0x1b75ff, 0.3, true), -0.01, 128);
  const radarInner = ring(BALL_RADIUS * 7.6, 0.018, material(0xff3df2, 0.55, true), 0.0, 8);
  const centerCore = ring(BALL_RADIUS * 3.2, 0.016, material(0xffffff, 0.72, true), 0.04, 4);
  centerCore.rotation.z = Math.PI / 4;
  radar.userData.animate = 'slow-spin';
  radarInner.userData.animate = 'reverse-spin';
  centerCore.userData.animate = 'pulse';
  group.add(radar, radarInner, centerCore, makeRadials(edges, playerCount, colors));

  edges.forEach((edge, index) => {
    const playerIndex = arenaPlayerForEdge(index, playerCount);
    const edgeColor = playerIndex >= 0 ? colors[playerIndex % colors.length] : 0x514a86;
    group.add(makeEdgeModule(edge, edgeColor, playerIndex, mats));
  });
  group.add(makeCornerJoints(edges, mats));

  group.userData.radius = radius;
  group.userData.sides = arenaSides;
  return group;
}

export function disposeArenaVisuals(arenaGroup: THREE.Group) {
  arenaGroup.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return;
    object.geometry.dispose();
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.forEach((meshMaterial) => meshMaterial.dispose());
  });
}

export function updateArenaVisuals(arenaGroup: THREE.Group, time: number) {
  const seconds = time / 1000;
  arenaGroup.traverse((object) => {
    if (object.userData.animate === 'slow-spin') {
      object.rotation.z = seconds * 0.08;
      return;
    }
    if (object.userData.animate === 'reverse-spin') {
      object.rotation.z = -seconds * 0.13;
      return;
    }
    if (object.userData.animate === 'pulse') {
      const pulse = 1 + Math.sin(seconds * 2.2) * 0.035;
      object.scale.setScalar(pulse);
    }
  });
}
