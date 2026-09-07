import * as THREE from 'three';
import { BALL_RADIUS } from '../../../shared/constants';
import type { BallSnapshot } from '../game/types';

type BallVisual = THREE.Group & {
  userData: {
    id: string;
    core: THREE.Mesh;
    aura: THREE.Mesh;
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

function makeMaterial(color: number, opacity = 1) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    side: THREE.DoubleSide,
  });
}

function createBallVisual(ball: BallSnapshot, color: number): BallVisual {
  const group = new THREE.Group() as BallVisual;
  const core = new THREE.Mesh(new THREE.SphereGeometry(BALL_RADIUS, 32, 18), makeMaterial(color));
  const aura = new THREE.Mesh(new THREE.RingGeometry(BALL_RADIUS * 1.55, BALL_RADIUS * 1.95, 40), makeMaterial(color, 0.42));
  const trail = [0, 1, 2].map((index) => {
    const ghost = new THREE.Mesh(
      new THREE.CircleGeometry(BALL_RADIUS * (1.05 - index * 0.16), 24),
      makeMaterial(color, 0.18 - index * 0.04),
    );
    ghost.position.z = -0.03 - index * 0.02;
    return ghost;
  });

  core.scale.z = 0.42;
  aura.position.z = 0.02;
  group.add(...trail, aura, core);
  group.userData.id = ball.id;
  group.userData.core = core;
  group.userData.aura = aura;
  group.userData.trail = trail;
  return group;
}

export function syncBallVisuals(
  ballGroup: THREE.Group,
  balls: BallSnapshot[],
  colors: number[],
  time: number,
) {
  const liveIds = new Set(balls.map((ball) => ball.id));
  for (const child of [...ballGroup.children]) {
    if (!liveIds.has(child.userData.id)) {
      ballGroup.remove(child);
      disposeObject(child);
    }
  }

  balls.forEach((ball, index) => {
    const color = ball.lastTouchEdge >= 0 ? colors[ball.lastTouchEdge % colors.length] : 0xffffff;
    let visual = ballGroup.children.find((child) => child.userData.id === ball.id) as BallVisual | undefined;
    if (!visual) {
      visual = createBallVisual(ball, color);
      ballGroup.add(visual);
    }

    const speed = Math.hypot(ball.vx, ball.vy) || 1;
    const dir = { x: ball.vx / speed, y: ball.vy / speed };
    const charged = ball.chargedBy >= 0;
    const spawnPulse = Math.max(0, 1 - ball.age / 0.7);
    const pulse = 1 + Math.sin(time * 0.012 + index) * (charged ? 0.16 : 0.06) + spawnPulse * 0.45;

    visual.position.set(ball.x, ball.y, 0.32);
    visual.scale.set(pulse, pulse, 1);

    const meshes = [visual.userData.core, visual.userData.aura, ...visual.userData.trail];
    meshes.forEach((mesh) => {
      const material = mesh.material as THREE.MeshBasicMaterial;
      material.color.setHex(color);
    });

    visual.userData.aura.scale.setScalar(charged ? 1.32 : 1);
    visual.userData.aura.rotation.z = time * 0.004 * (charged ? 1.8 : 1);
    (visual.userData.aura.material as THREE.MeshBasicMaterial).opacity = charged ? 0.72 : 0.38 + spawnPulse * 0.24;

    visual.userData.trail.forEach((ghost, trailIndex) => {
      const distance = BALL_RADIUS * (2.2 + trailIndex * 1.35);
      ghost.position.x = -dir.x * distance;
      ghost.position.y = -dir.y * distance;
      (ghost.material as THREE.MeshBasicMaterial).opacity = Math.max(0.04, 0.18 - trailIndex * 0.04 + (charged ? 0.07 : 0));
    });
  });
}
