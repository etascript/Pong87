import * as THREE from 'three';
import type { ObstacleSnapshot } from '../game/types';

function disposeMesh(mesh: THREE.Mesh) {
  mesh.geometry.dispose();
  const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  materials.forEach((material) => material.dispose());
}

function createObstacleMesh(obstacle: ObstacleSnapshot) {
  const geometry = obstacle.variant === 'barrier'
    ? new THREE.BoxGeometry(obstacle.radius * 2.35, 0.18, 0.18)
    : obstacle.variant === 'bumper'
      ? new THREE.CircleGeometry(obstacle.radius * 0.82, 8)
      : new THREE.RingGeometry(obstacle.radius * 0.42, obstacle.radius * 0.82, 28);
  const color = obstacle.variant === 'barrier'
    ? 0xffffff
    : obstacle.variant === 'bumper'
      ? 0xffe85a
      : 0x27f5ff;
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: obstacle.variant === 'post' ? 0.9 : 0.78,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.userData.id = obstacle.id;
  mesh.userData.createdAt = performance.now();
  mesh.userData.despawnAt = 0;
  mesh.scale.setScalar(0.1);
  return mesh;
}

export function syncObstacleVisuals(
  obstacleGroup: THREE.Group,
  obstacles: ObstacleSnapshot[],
  time: number,
) {
  const liveIds = new Set(obstacles.map((obstacle) => obstacle.id));

  for (const child of [...obstacleGroup.children]) {
    if (!liveIds.has(child.userData.id)) {
      child.userData.despawnAt ||= time;
      const fade = Math.min(1, (time - child.userData.despawnAt) / 260);
      child.scale.setScalar(Math.max(0.01, 1 - fade));
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshBasicMaterial;
        material.opacity = Math.max(0, (child.userData.baseOpacity ?? 0.8) * (1 - fade));
      }
      if (fade >= 1) {
        obstacleGroup.remove(child);
        if (child instanceof THREE.Mesh) {
          disposeMesh(child);
        }
      }
    }
  }

  obstacles.forEach((obstacle, index) => {
    let mesh = obstacleGroup.children.find((child) => child.userData.id === obstacle.id) as THREE.Mesh | undefined;
    if (!mesh) {
      mesh = createObstacleMesh(obstacle);
      mesh.userData.baseOpacity = (mesh.material as THREE.MeshBasicMaterial).opacity;
      obstacleGroup.add(mesh);
    }

    mesh.userData.despawnAt = 0;
    mesh.position.set(obstacle.x, obstacle.y, 0.18);
    mesh.rotation.z = obstacle.angle + time * 0.0015 * Math.sign(obstacle.spin);
    const spawn = Math.min(1, (time - mesh.userData.createdAt) / 340);
    const pulse = 1 + Math.sin(time * 0.006 + index) * (obstacle.variant === 'barrier' ? 0.025 : 0.055);
    mesh.scale.setScalar((0.18 + spawn * 0.82) * pulse);
    (mesh.material as THREE.MeshBasicMaterial).opacity = (mesh.userData.baseOpacity ?? 0.8) * spawn;
  });
}
