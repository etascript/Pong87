import { clamp } from './geometry';

export type ObstacleVariant = 'post' | 'barrier' | 'bumper';

export type ObstacleConfig = {
  id: string;
  x: number;
  y: number;
  radius: number;
  sides: number;
  angle: number;
  spin: number;
  variant: ObstacleVariant;
};

type Anchor = {
  x: number;
  y: number;
  weight: number;
};

function obstacleCountRange(playerCount: number) {
  if (playerCount >= 8) return { min: 7, max: 8 };
  if (playerCount >= 7) return { min: 6, max: 7 };
  if (playerCount >= 5) return { min: 5, max: 6 };
  if (playerCount >= 4) return { min: 4, max: 5 };
  return { min: 3, max: 4 };
}

function polarAnchor(radius: number, angle: number, distanceRatio: number, weight = 1): Anchor {
  return {
    x: Math.cos(angle) * radius * distanceRatio,
    y: Math.sin(angle) * radius * distanceRatio,
    weight,
  };
}

function buildObstacleAnchors(playerCount: number, arenaRadius: number) {
  const anchors: Anchor[] = [
    { x: 0, y: 0, weight: 0.2 },
    { x: arenaRadius * 0.22, y: 0, weight: 1.2 },
    { x: -arenaRadius * 0.22, y: 0, weight: 1.2 },
    { x: 0, y: arenaRadius * 0.22, weight: 1.2 },
    { x: 0, y: -arenaRadius * 0.22, weight: 1.2 },
  ];

  const ringSteps = playerCount >= 7 ? 16 : playerCount >= 5 ? 12 : 8;
  const midOffset = Math.PI / ringSteps;
  for (let index = 0; index < ringSteps; index += 1) {
    anchors.push(polarAnchor(arenaRadius, midOffset + (index / ringSteps) * Math.PI * 2, 0.39, 1.6));
  }

  const outerSteps = playerCount >= 7 ? 16 : 10;
  for (let index = 0; index < outerSteps; index += 1) {
    anchors.push(polarAnchor(arenaRadius, (index / outerSteps) * Math.PI * 2, 0.58, 1.35));
  }

  if (playerCount >= 6) {
    for (let index = 0; index < 8; index += 1) {
      anchors.push(polarAnchor(arenaRadius, Math.PI / 4 + (index / 8) * Math.PI * 2, 0.69, 1));
    }
  }

  return anchors;
}

function weightedShuffle<T extends { weight: number }>(items: T[], rng: () => number) {
  return items
    .map((item) => ({ item, key: rng() ** (1 / item.weight) }))
    .sort((a, b) => b.key - a.key)
    .map(({ item }) => item);
}

function obstacleVariant(index: number, rng: () => number): ObstacleVariant {
  const pattern: ObstacleVariant[] = ['bumper', 'post', 'barrier', 'bumper', 'post', 'bumper'];
  const variant = pattern[index % pattern.length];
  if (rng() < 0.12) return pattern[Math.floor(rng() * pattern.length)];
  return variant;
}

function obstacleRadius(variant: ObstacleVariant, rng: () => number) {
  if (variant === 'barrier') return 0.5 + rng() * 0.14;
  if (variant === 'bumper') return 0.42 + rng() * 0.13;
  return 0.34 + rng() * 0.11;
}

export function createObstacleSet(
  playerCount: number,
  arenaRadius: number,
  idPrefix: string,
  setId: number,
  rng: () => number = Math.random,
): ObstacleConfig[] {
  const range = obstacleCountRange(playerCount);
  const targetCount = range.min + Math.floor(rng() * (range.max - range.min + 1));
  const anchors = weightedShuffle(buildObstacleAnchors(playerCount, arenaRadius), rng);
  const minGap = arenaRadius * (playerCount >= 7 ? 0.205 : playerCount >= 5 ? 0.19 : 0.18);
  const jitter = arenaRadius * (playerCount >= 7 ? 0.055 : 0.04);
  const selected: ObstacleConfig[] = [];

  for (const anchor of anchors) {
    if (selected.length >= targetCount) break;

    const variant = obstacleVariant(selected.length, rng);
    const radius = obstacleRadius(variant, rng);
    const candidate = {
      x: anchor.x + (rng() - 0.5) * jitter,
      y: anchor.y + (rng() - 0.5) * jitter,
    };
    const distanceFromCenter = Math.hypot(candidate.x, candidate.y);
    if (distanceFromCenter > arenaRadius * 0.72) continue;
    if (distanceFromCenter < arenaRadius * 0.1 && selected.length > 0) continue;

    const tooClose = selected.some((other) => {
      const distance = Math.hypot(candidate.x - other.x, candidate.y - other.y);
      return distance < minGap + (radius + other.radius) * 0.45;
    });
    if (tooClose) continue;

    selected.push({
      id: `${idPrefix}-${setId}-${selected.length}`,
      x: candidate.x,
      y: candidate.y,
      radius,
      sides: variant === 'bumper' ? 8 : variant === 'barrier' ? 4 : 16,
      angle: rng() * Math.PI * 2,
      spin: (rng() < 0.5 ? -1 : 1) * clamp(0.5 + rng() * 1.15, 0.5, 1.65),
      variant,
    });
  }

  let fallbackAttempts = 0;
  while (selected.length < range.min && fallbackAttempts < 80) {
    fallbackAttempts += 1;
    const angle = rng() * Math.PI * 2;
    const distance = arenaRadius * (0.3 + rng() * 0.38);
    const variant = obstacleVariant(selected.length, rng);
    const radius = obstacleRadius(variant, rng);
    const candidate = { x: Math.cos(angle) * distance, y: Math.sin(angle) * distance };
    const tooClose = selected.some((other) => Math.hypot(candidate.x - other.x, candidate.y - other.y) < minGap);
    if (tooClose) continue;

    selected.push({
      id: `${idPrefix}-${setId}-${selected.length}`,
      x: candidate.x,
      y: candidate.y,
      radius,
      sides: variant === 'bumper' ? 8 : variant === 'barrier' ? 4 : 16,
      angle: rng() * Math.PI * 2,
      spin: (rng() < 0.5 ? -1 : 1) * (0.5 + rng() * 1.15),
      variant,
    });
  }

  return selected;
}
