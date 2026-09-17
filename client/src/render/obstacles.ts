import * as THREE from 'three';
import type { ObstacleSnapshot } from '../game/types';

type ObstacleVisual = THREE.Group & {
  userData: THREE.Object3D['userData'] & {
    id: string;
    createdAt: number;
    despawnAt: number;
    baseOpacity: number;
    variant: ObstacleSnapshot['variant'];
    pulseMeshes: THREE.Mesh[];
    spinMeshes: THREE.Object3D[];
  };
};

function material(color: number, opacity: number, additive = false) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    child.geometry.dispose();
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((mat) => mat.dispose());
  });
}

function setOpacity(object: THREE.Object3D, multiplier: number) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const mat = child.material as THREE.MeshBasicMaterial;
    const base = child.userData.baseOpacity ?? mat.opacity;
    mat.opacity = Math.max(0, base * multiplier);
  });
}

function makeBarrier(obstacle: ObstacleSnapshot) {
  const group = new THREE.Group();
  const color = 0x9efcff;
  const core = new THREE.Mesh(
    new THREE.BoxGeometry(obstacle.radius * 2.45, obstacle.radius * 0.33, 0.16),
    material(0xffffff, 0.7),
  );
  const glow = new THREE.Mesh(
    new THREE.BoxGeometry(obstacle.radius * 2.85, obstacle.radius * 0.78, 0.06),
    material(color, 0.16, true),
  );
  const railTop = new THREE.Mesh(
    new THREE.BoxGeometry(obstacle.radius * 2.7, obstacle.radius * 0.08, 0.08),
    material(0xff4fed, 0.68, true),
  );
  const railBottom = railTop.clone();
  railTop.position.y = obstacle.radius * 0.34;
  railBottom.position.y = -obstacle.radius * 0.34;
  const shardShape = new THREE.Shape();
  shardShape.moveTo(0, obstacle.radius * 0.52);
  shardShape.lineTo(obstacle.radius * 0.46, 0);
  shardShape.lineTo(0, -obstacle.radius * 0.52);
  shardShape.closePath();
  const shardGeometry = new THREE.ShapeGeometry(shardShape);
  const leftShard = new THREE.Mesh(shardGeometry, material(0xfff06a, 0.5, true));
  const rightShard = new THREE.Mesh(shardGeometry.clone(), material(0xfff06a, 0.5, true));
  leftShard.position.x = -obstacle.radius * 1.38;
  rightShard.position.x = obstacle.radius * 1.38;
  rightShard.rotation.z = Math.PI;
  group.add(glow, core, railTop, railBottom, leftShard, rightShard);
  return { group, pulseMeshes: [glow, leftShard, rightShard], spinMeshes: [] };
}

function makeBumper(obstacle: ObstacleSnapshot) {
  const group = new THREE.Group();
  const segments = Math.max(8, obstacle.sides || 8);
  const halo = new THREE.Mesh(
    new THREE.RingGeometry(obstacle.radius * 0.72, obstacle.radius * 1.18, segments),
    material(0xfff06a, 0.46, true),
  );
  const core = new THREE.Mesh(
    new THREE.CircleGeometry(obstacle.radius * 0.58, segments),
    material(0xffe85a, 0.62),
  );
  const whiteCore = new THREE.Mesh(
    new THREE.CircleGeometry(obstacle.radius * 0.24, 20),
    material(0xffffff, 0.76, true),
  );
  const bumperRing = new THREE.Mesh(
    new THREE.RingGeometry(obstacle.radius * 0.35, obstacle.radius * 0.46, 20),
    material(0xff4f6d, 0.62, true),
  );
  group.add(halo, core, bumperRing, whiteCore);
  return { group, pulseMeshes: [halo, whiteCore], spinMeshes: [bumperRing] };
}

function makePost(obstacle: ObstacleSnapshot) {
  const group = new THREE.Group();
  const sides = Math.max(5, Math.min(8, obstacle.sides || 6));
  const post = new THREE.Mesh(
    new THREE.CircleGeometry(obstacle.radius * 0.42, sides),
    material(0x27f5ff, 0.68),
  );
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(obstacle.radius * 0.55, obstacle.radius * 0.86, 28),
    material(0x27f5ff, 0.54, true),
  );
  const outer = new THREE.Mesh(
    new THREE.RingGeometry(obstacle.radius * 0.98, obstacle.radius * 1.08, 28),
    material(0xca7cff, 0.34, true),
  );
  const spinner = new THREE.Group();
  for (let index = 0; index < 4; index += 1) {
    const arm = new THREE.Mesh(
      new THREE.BoxGeometry(obstacle.radius * 1.28, obstacle.radius * 0.11, 0.06),
      material(index % 2 === 0 ? 0xffffff : 0x42ecff, 0.48, true),
    );
    arm.rotation.z = (Math.PI / 4) * index;
    spinner.add(arm);
  }
  group.add(outer, ring, post, spinner);
  return { group, pulseMeshes: [outer, ring], spinMeshes: [spinner] };
}

function makeSpinner(obstacle: ObstacleSnapshot) {
  const group = new THREE.Group();
  const hub = new THREE.Mesh(
    new THREE.CircleGeometry(obstacle.radius * 0.26, 18),
    material(0xffffff, 0.74, true),
  );
  const warningRing = new THREE.Mesh(
    new THREE.RingGeometry(obstacle.radius * 0.82, obstacle.radius * 1.05, 36),
    material(0xff4f6d, 0.38, true),
  );
  const rotor = new THREE.Group();
  for (let index = 0; index < 3; index += 1) {
    const blade = new THREE.Mesh(
      new THREE.BoxGeometry(obstacle.radius * 1.62, obstacle.radius * 0.16, 0.08),
      material(index === 0 ? 0xfff06a : 0x42ecff, 0.58, true),
    );
    blade.position.x = obstacle.radius * 0.58;
    blade.rotation.z = (Math.PI * 2 * index) / 3;
    rotor.add(blade);
    const cap = new THREE.Mesh(
      new THREE.CircleGeometry(obstacle.radius * 0.16, 10),
      material(0xffffff, 0.44, true),
    );
    cap.position.set(
      Math.cos(blade.rotation.z) * obstacle.radius * 1.33,
      Math.sin(blade.rotation.z) * obstacle.radius * 1.33,
      0.03,
    );
    rotor.add(cap);
  }
  group.add(warningRing, rotor, hub);
  return { group, pulseMeshes: [warningRing, hub], spinMeshes: [rotor] };
}

function makeCrystal(obstacle: ObstacleSnapshot) {
  const group = new THREE.Group();
  const shardShape = new THREE.Shape();
  shardShape.moveTo(0, obstacle.radius * 1.2);
  shardShape.lineTo(obstacle.radius * 0.52, obstacle.radius * 0.12);
  shardShape.lineTo(obstacle.radius * 0.22, -obstacle.radius * 0.96);
  shardShape.lineTo(-obstacle.radius * 0.38, -obstacle.radius * 0.72);
  shardShape.lineTo(-obstacle.radius * 0.55, obstacle.radius * 0.08);
  shardShape.closePath();

  const body = new THREE.Mesh(
    new THREE.ShapeGeometry(shardShape),
    material(0xca7cff, 0.58),
  );
  const inner = new THREE.Mesh(
    new THREE.ShapeGeometry(shardShape),
    material(0x42ecff, 0.26, true),
  );
  inner.scale.setScalar(0.62);
  inner.position.z = 0.04;
  const halo = new THREE.Mesh(
    new THREE.RingGeometry(obstacle.radius * 0.62, obstacle.radius * 1.08, 5),
    material(0xca7cff, 0.22, true),
  );
  const glint = new THREE.Mesh(
    new THREE.BoxGeometry(obstacle.radius * 0.16, obstacle.radius * 1.24, 0.07),
    material(0xffffff, 0.4, true),
  );
  glint.rotation.z = -0.36;
  glint.position.z = 0.08;
  group.add(halo, body, inner, glint);
  return { group, pulseMeshes: [halo, inner, glint], spinMeshes: [halo] };
}

function createObstacleVisual(obstacle: ObstacleSnapshot): ObstacleVisual {
  const visual = new THREE.Group() as ObstacleVisual;
  const parts = obstacle.variant === 'barrier'
    ? makeBarrier(obstacle)
    : obstacle.variant === 'bumper'
      ? makeBumper(obstacle)
      : obstacle.variant === 'spinner'
        ? makeSpinner(obstacle)
        : obstacle.variant === 'crystal'
          ? makeCrystal(obstacle)
          : makePost(obstacle);

  visual.add(parts.group);
  visual.userData.id = obstacle.id;
  visual.userData.createdAt = performance.now();
  visual.userData.despawnAt = 0;
  visual.userData.baseOpacity = obstacle.variant === 'barrier' ? 0.78 : 0.86;
  visual.userData.variant = obstacle.variant;
  visual.userData.pulseMeshes = parts.pulseMeshes;
  visual.userData.spinMeshes = parts.spinMeshes;
  visual.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.userData.baseOpacity = (child.material as THREE.MeshBasicMaterial).opacity;
    }
  });
  visual.scale.setScalar(0.1);
  return visual;
}

export function syncObstacleVisuals(
  obstacleGroup: THREE.Group,
  obstacles: ObstacleSnapshot[],
  time: number,
) {
  const liveIds = new Set(obstacles.map((obstacle) => obstacle.id));

  for (const child of [...obstacleGroup.children] as ObstacleVisual[]) {
    if (!liveIds.has(child.userData.id)) {
      child.userData.despawnAt ||= time;
      const fade = Math.min(1, (time - child.userData.despawnAt) / 260);
      child.scale.setScalar(Math.max(0.01, 1 - fade));
      setOpacity(child, 1 - fade);
      if (fade >= 1) {
        obstacleGroup.remove(child);
        disposeObject(child);
      }
    }
  }

  obstacles.forEach((obstacle, index) => {
    let visual = obstacleGroup.children.find((child) => child.userData.id === obstacle.id) as ObstacleVisual | undefined;
    if (!visual) {
      visual = createObstacleVisual(obstacle);
      obstacleGroup.add(visual);
    }

    visual.userData.despawnAt = 0;
    visual.position.set(obstacle.x, obstacle.y, 0.2);
    visual.rotation.z = obstacle.angle + time * 0.0013 * Math.sign(obstacle.spin || 1);
    const spawn = Math.min(1, (time - visual.userData.createdAt) / 340);
    const pulse = 1 + Math.sin(time * 0.0065 + index) * (obstacle.variant === 'barrier' ? 0.025 : 0.07);
    visual.scale.setScalar((0.18 + spawn * 0.82) * pulse);
    setOpacity(visual, spawn);

    visual.userData.pulseMeshes.forEach((mesh, pulseIndex) => {
      mesh.scale.setScalar(1 + Math.sin(time * 0.009 + pulseIndex + index) * 0.08);
    });
    visual.userData.spinMeshes.forEach((mesh, spinIndex) => {
      mesh.rotation.z += 0.018 * Math.sign(obstacle.spin || 1) * (spinIndex + 1);
    });
  });
}
