import * as THREE from 'three';
import { PADDLE_DEPTH, PADDLE_LENGTH } from '../../../shared/constants';

type PaddleMeshRefs = {
  core: THREE.Mesh;
  shield: THREE.Mesh;
  glow: THREE.Mesh;
  rails: THREE.Mesh[];
  ticks: THREE.Mesh[];
  chargeBars: THREE.Mesh[];
};

export type PaddleVisual = THREE.Group & {
  userData: THREE.Object3D['userData'] & {
    playerIndex: number;
    edgeIndex: number;
    refs: PaddleMeshRefs;
  };
};

function neonMaterial(color: number, opacity: number, additive = false) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    depthWrite: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
}

function setColor(mesh: THREE.Mesh, color: number) {
  const material = mesh.material as THREE.MeshBasicMaterial;
  material.color.setHex(color);
}

function setOpacity(mesh: THREE.Mesh, opacity: number) {
  const material = mesh.material as THREE.MeshBasicMaterial;
  material.opacity = opacity;
  material.transparent = opacity < 1;
}

export function createPaddleVisual(color: number, playerIndex: number, edgeIndex: number): PaddleVisual {
  const group = new THREE.Group() as PaddleVisual;

  const shield = new THREE.Mesh(
    new THREE.BoxGeometry(PADDLE_LENGTH * 1.16, PADDLE_DEPTH * 1.95, 0.035),
    neonMaterial(color, 0.2, true),
  );
  shield.position.z = -0.035;

  const glow = new THREE.Mesh(
    new THREE.BoxGeometry(PADDLE_LENGTH * 1.32, PADDLE_DEPTH * 2.85, 0.025),
    neonMaterial(color, 0.12, true),
  );
  glow.position.z = -0.06;

  const core = new THREE.Mesh(
    new THREE.BoxGeometry(PADDLE_LENGTH, PADDLE_DEPTH, 0.2),
    neonMaterial(color, 0.96),
  );
  core.position.z = 0.02;

  const railGeometry = new THREE.BoxGeometry(PADDLE_LENGTH * 1.08, PADDLE_DEPTH * 0.16, 0.08);
  const railTop = new THREE.Mesh(railGeometry.clone(), neonMaterial(0xffffff, 0.86, true));
  const railBottom = new THREE.Mesh(railGeometry.clone(), neonMaterial(0xffffff, 0.86, true));
  railTop.position.set(0, PADDLE_DEPTH * 0.66, 0.08);
  railBottom.position.set(0, -PADDLE_DEPTH * 0.66, 0.08);

  const ticks: THREE.Mesh[] = [];
  for (let index = 0; index < 5; index += 1) {
    const tick = new THREE.Mesh(
      new THREE.BoxGeometry(PADDLE_LENGTH * 0.055, PADDLE_DEPTH * 0.42, 0.09),
      neonMaterial(0xffffff, 0.48, true),
    );
    tick.position.set((index - 2) * PADDLE_LENGTH * 0.18, 0, 0.1);
    ticks.push(tick);
  }

  const chargeBars: THREE.Mesh[] = [];
  for (let index = 0; index < 4; index += 1) {
    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(PADDLE_LENGTH * 0.16, PADDLE_DEPTH * 0.2, 0.1),
      neonMaterial(0xfff06a, 0.0, true),
    );
    bar.position.set((index - 1.5) * PADDLE_LENGTH * 0.2, 0, 0.14);
    chargeBars.push(bar);
  }

  group.add(glow, shield, core, railTop, railBottom, ...ticks, ...chargeBars);
  group.userData.playerIndex = playerIndex;
  group.userData.edgeIndex = edgeIndex;
  group.userData.refs = {
    core,
    shield,
    glow,
    rails: [railTop, railBottom],
    ticks,
    chargeBars,
  };
  return group;
}

export function updatePaddleVisual(
  paddle: PaddleVisual,
  options: {
    color: number;
    connected: boolean;
    eliminatedWall: boolean;
    charged: boolean;
    time: number;
  },
) {
  const { refs } = paddle.userData;
  const wall = options.eliminatedWall;
  const color = wall ? 0xffffff : options.color;
  const connectedOpacity = options.connected || wall ? 1 : 0.45;
  const pulse = 0.5 + 0.5 * Math.sin(options.time * 0.011 + paddle.userData.playerIndex);
  const chargePulse = options.charged ? 0.65 + pulse * 0.35 : 0;

  [refs.core, refs.shield, refs.glow, ...refs.rails, ...refs.ticks].forEach((mesh) => setColor(mesh, color));
  setOpacity(refs.core, wall ? 0.22 : 0.9 * connectedOpacity);
  setOpacity(refs.shield, wall ? 0.16 : (0.23 + chargePulse * 0.24) * connectedOpacity);
  setOpacity(refs.glow, wall ? 0.1 : (0.14 + chargePulse * 0.25) * connectedOpacity);
  refs.rails.forEach((rail) => setOpacity(rail, wall ? 0.34 : (0.76 + chargePulse * 0.18) * connectedOpacity));
  refs.ticks.forEach((tick, index) => {
    const flicker = 0.32 + Math.sin(options.time * 0.016 + index) * 0.08;
    setOpacity(tick, wall ? 0.0 : flicker * connectedOpacity);
  });
  refs.chargeBars.forEach((bar, index) => {
    setOpacity(bar, options.charged && !wall ? (0.42 + index * 0.12 + pulse * 0.22) * connectedOpacity : 0);
    setColor(bar, index % 2 === 0 ? 0xfff06a : color);
  });

  refs.shield.scale.y = wall ? 0.7 : 1 + chargePulse * 0.28;
  refs.glow.scale.y = wall ? 0.58 : 1 + chargePulse * 0.42;
  refs.core.scale.y = wall ? 0.72 : 1;
}
