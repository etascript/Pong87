import * as THREE from 'three';
import { BALL_RADIUS } from '../../../shared/constants';
import type { BallSnapshot } from '../game/types';

type BallVisual = THREE.Group & {
  userData: {
    id: string;
    core: THREE.Mesh;
    hotCore: THREE.Mesh;
    halo: THREE.Mesh;
    ring: THREE.Mesh;
    chargeRing: THREE.Mesh;
    trail: THREE.Mesh[];
  };
};

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    child.geometry.dispose();
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((material) => material.dispose());
  });
}

function makeMaterial(color: number, opacity = 1, additive = false) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
}

function setColor(mesh: THREE.Mesh, color: number) {
  (mesh.material as THREE.MeshBasicMaterial).color.setHex(color);
}

function setOpacity(mesh: THREE.Mesh, opacity: number) {
  const material = mesh.material as THREE.MeshBasicMaterial;
  material.opacity = opacity;
  material.transparent = opacity < 1;
}

function createBallVisual(ball: BallSnapshot, color: number): BallVisual {
  const group = new THREE.Group() as BallVisual;
  const trail = [0, 1, 2, 3].map((index) => {
    const ghost = new THREE.Mesh(
      new THREE.CircleGeometry(BALL_RADIUS * (1.32 - index * 0.18), 24),
      makeMaterial(color, 0.16 - index * 0.03, true),
    );
    ghost.position.z = -0.08 - index * 0.018;
    return ghost;
  });
  const halo = new THREE.Mesh(
    new THREE.CircleGeometry(BALL_RADIUS * 2.25, 32),
    makeMaterial(color, 0.16, true),
  );
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(BALL_RADIUS * 1.22, BALL_RADIUS * 1.62, 36),
    makeMaterial(color, 0.52, true),
  );
  const chargeRing = new THREE.Mesh(
    new THREE.RingGeometry(BALL_RADIUS * 1.82, BALL_RADIUS * 2.05, 36),
    makeMaterial(0xfff06a, 0.0, true),
  );
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(BALL_RADIUS, 28, 14),
    makeMaterial(color, 0.96),
  );
  const hotCore = new THREE.Mesh(
    new THREE.SphereGeometry(BALL_RADIUS * 0.48, 18, 10),
    makeMaterial(0xffffff, 0.92, true),
  );

  core.scale.z = 0.44;
  hotCore.scale.z = 0.38;
  halo.position.z = -0.04;
  ring.position.z = 0.04;
  chargeRing.position.z = 0.05;
  core.position.z = 0.08;
  hotCore.position.z = 0.16;

  group.add(...trail, halo, ring, chargeRing, core, hotCore);
  group.userData.id = ball.id;
  group.userData.core = core;
  group.userData.hotCore = hotCore;
  group.userData.halo = halo;
  group.userData.ring = ring;
  group.userData.chargeRing = chargeRing;
  group.userData.trail = trail;
  group.scale.setScalar(0.12);
  return group;
}

export function syncBallVisuals(
  ballGroup: THREE.Group,
  balls: BallSnapshot[],
  colors: number[],
  time: number,
  renderLeadSeconds = 0,
) {
  const liveIds = new Set(balls.map((ball) => ball.id));
  for (const child of [...ballGroup.children]) {
    if (!liveIds.has(child.userData.id)) {
      ballGroup.remove(child);
      disposeObject(child);
    }
  }

  balls.forEach((ball, index) => {
    const ownerColor = ball.lastTouchEdge >= 0 ? colors[ball.lastTouchEdge % colors.length] : 0xffffff;
    const chargeColor = ball.chargedBy >= 0 ? colors[ball.chargedBy % colors.length] : ownerColor;
    let visual = ballGroup.children.find((child) => child.userData.id === ball.id) as BallVisual | undefined;
    if (!visual) {
      visual = createBallVisual(ball, ownerColor);
      ballGroup.add(visual);
    }

    const speed = Math.hypot(ball.vx, ball.vy) || 1;
    const dir = { x: ball.vx / speed, y: ball.vy / speed };
    const charged = ball.chargedBy >= 0;
    const spawnPulse = Math.max(0, 1 - ball.age / 0.58);
    const speedGlow = Math.min(1, Math.max(0, (ball.hitCount - 3) / 8));
    const pulse = 1 + Math.sin(time * 0.014 + index) * (charged ? 0.14 : 0.045) + spawnPulse * 0.6;

    visual.position.set(ball.x + ball.vx * renderLeadSeconds, ball.y + ball.vy * renderLeadSeconds, 0.36);
    visual.scale.setScalar(Math.max(0.2, pulse));
    visual.rotation.z = Math.atan2(ball.vy, ball.vx);

    [visual.userData.core, visual.userData.halo, visual.userData.ring, ...visual.userData.trail].forEach((mesh) => {
      setColor(mesh, ownerColor);
    });
    setColor(visual.userData.chargeRing, chargeColor);

    setOpacity(visual.userData.core, 0.92);
    setOpacity(visual.userData.hotCore, 0.82 + spawnPulse * 0.16);
    setOpacity(visual.userData.halo, 0.13 + spawnPulse * 0.22 + speedGlow * 0.1 + (charged ? 0.2 : 0));
    setOpacity(visual.userData.ring, 0.46 + spawnPulse * 0.25 + speedGlow * 0.12);
    setOpacity(visual.userData.chargeRing, charged ? 0.72 + Math.sin(time * 0.022) * 0.14 : 0);

    visual.userData.ring.rotation.z = time * 0.0045 * (charged ? 1.75 : 1);
    visual.userData.chargeRing.rotation.z = -time * 0.008;
    visual.userData.halo.scale.setScalar(1 + spawnPulse * 0.55 + speedGlow * 0.28 + (charged ? 0.3 : 0));
    visual.userData.chargeRing.scale.setScalar(1 + Math.sin(time * 0.018) * 0.08);

    visual.userData.trail.forEach((ghost, trailIndex) => {
      const distance = BALL_RADIUS * (2.1 + trailIndex * 1.12 + speedGlow * 0.9);
      ghost.position.x = -dir.x * distance;
      ghost.position.y = -dir.y * distance;
      ghost.rotation.z = Math.atan2(ball.vy, ball.vx);
      ghost.scale.x = 1.15 + speedGlow * 0.65 + (charged ? 0.3 : 0);
      ghost.scale.y = 0.72;
      setOpacity(ghost, Math.max(0.035, 0.17 - trailIndex * 0.031 + speedGlow * 0.035 + (charged ? 0.055 : 0)));
    });
  });
}
