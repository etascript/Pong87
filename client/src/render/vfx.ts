import * as THREE from 'three';

type VfxKind = 'pad' | 'obstacle' | 'wall' | 'score' | 'spawn';

type VfxEffect = THREE.Group & {
  userData: {
    createdAt: number;
    life: number;
    kind: VfxKind;
    velocity: { x: number; y: number };
  };
};

const ringGeometry = new THREE.RingGeometry(0.18, 0.34, 28);
const burstGeometry = new THREE.PlaneGeometry(0.34, 0.045);
const sparkGeometry = new THREE.CircleGeometry(0.055, 10);

function mat(color: number, opacity: number) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}

function disposeEffect(effect: THREE.Object3D) {
  effect.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((material) => material.dispose());
  });
}

export function createVfxSystem(parent: THREE.Group) {
  const group = new THREE.Group();
  parent.add(group);

  function spawn(x: number, y: number, color: number, kind: VfxKind, direction = 0) {
    const effect = new THREE.Group() as VfxEffect;
    const ring = new THREE.Mesh(ringGeometry, mat(color, kind === 'score' ? 0.7 : 0.55));
    const flash = new THREE.Mesh(sparkGeometry, mat(0xffffff, 0.75));
    const burstCount = kind === 'spawn' ? 6 : kind === 'score' ? 10 : 4;
    const radius = kind === 'spawn' ? 0.34 : 0.2;

    for (let index = 0; index < burstCount; index += 1) {
      const angle = direction + (Math.PI * 2 * index) / burstCount;
      const spark = new THREE.Mesh(index % 2 === 0 ? burstGeometry : sparkGeometry, mat(index % 3 === 0 ? 0xfff06a : color, 0.44));
      spark.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0.03);
      spark.rotation.z = angle;
      spark.userData.vx = Math.cos(angle) * (0.18 + index * 0.015);
      spark.userData.vy = Math.sin(angle) * (0.18 + index * 0.015);
      effect.add(spark);
    }

    ring.rotation.z = direction;
    ring.position.z = 0.05;
    flash.position.z = 0.08;
    effect.add(ring, flash);
    effect.position.set(x, y, 0.62);
    effect.userData.createdAt = performance.now();
    effect.userData.life = kind === 'score' ? 560 : 360;
    effect.userData.kind = kind;
    effect.userData.velocity = { x: Math.cos(direction) * 0.02, y: Math.sin(direction) * 0.02 };
    group.add(effect);
  }

  return {
    group,
    spawn,
    update(time: number) {
      for (const effect of [...group.children] as VfxEffect[]) {
        const age = time - effect.userData.createdAt;
        const t = Math.min(1, age / effect.userData.life);
        const fade = 1 - t;
        effect.scale.setScalar(0.75 + t * (effect.userData.kind === 'score' ? 1.4 : 0.9));
        effect.position.x += effect.userData.velocity.x * fade;
        effect.position.y += effect.userData.velocity.y * fade;
        effect.rotation.z += 0.025 * fade;
        effect.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          const material = child.material as THREE.MeshBasicMaterial;
          material.opacity = (child.geometry === ringGeometry ? 0.55 : 0.75) * fade;
          child.position.x += (child.userData.vx ?? 0) * fade;
          child.position.y += (child.userData.vy ?? 0) * fade;
        });
        if (t >= 1) {
          group.remove(effect);
          disposeEffect(effect);
        }
      }
    },
  };
}
