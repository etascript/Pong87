import { ARENA_RADIUS } from './constants';

export type Vec2 = {
  x: number;
  y: number;
};

export type Edge = {
  a: Vec2;
  b: Vec2;
  tangent: Vec2;
  inward: Vec2;
  length: number;
  angle: number;
};

export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function playfieldSides(playerCount: number) {
  return playerCount <= 3 ? 4 : playerCount;
}

export function arenaEdgeForPlayer(playerIndex: number, playerCount: number) {
  return playerCount === 2 ? playerIndex * 2 : playerIndex;
}

export function arenaPlayerForEdge(edgeIndex: number, playerCount: number) {
  if (playerCount === 2) {
    if (edgeIndex === 0) return 0;
    if (edgeIndex === 2) return 1;
    return -1;
  }
  if (playerCount === 3) {
    return edgeIndex < 3 ? edgeIndex : -1;
  }
  return edgeIndex < playerCount ? edgeIndex : -1;
}

export function playfieldRadius(playerCount: number, baseRadius = ARENA_RADIUS) {
  if (playerCount <= 2) return baseRadius * 1.04;
  return baseRadius * (1.08 + Math.max(0, playerCount - 4) * 0.055);
}

export function regularPolygonVertices(sides: number, radius = ARENA_RADIUS): Vec2[] {
  const start = -Math.PI / 2 + Math.PI / sides;
  return Array.from({ length: sides }, (_, index) => {
    const angle = start + (index / sides) * Math.PI * 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });
}

export function polygonEdges(sides: number, radius = ARENA_RADIUS): Edge[] {
  const vertices = regularPolygonVertices(sides, radius);

  return vertices.map((a, index) => {
    const b = vertices[(index + 1) % vertices.length];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const length = Math.hypot(dx, dy);
    const tangent = { x: dx / length, y: dy / length };
    const midpoint = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    const toCenter = { x: -midpoint.x, y: -midpoint.y };
    const centerLen = Math.hypot(toCenter.x, toCenter.y) || 1;
    const inward = { x: toCenter.x / centerLen, y: toCenter.y / centerLen };
    return {
      a,
      b,
      tangent,
      inward,
      length,
      angle: Math.atan2(tangent.y, tangent.x),
    };
  });
}

export function pointOnEdge(edge: Edge, t: number): Vec2 {
  return {
    x: edge.a.x + (edge.b.x - edge.a.x) * t,
    y: edge.a.y + (edge.b.y - edge.a.y) * t,
  };
}

export function dot(a: Vec2, b: Vec2) {
  return a.x * b.x + a.y * b.y;
}

export function reflect(velocity: Vec2, normal: Vec2): Vec2 {
  const d = dot(velocity, normal);
  return {
    x: velocity.x - 2 * d * normal.x,
    y: velocity.y - 2 * d * normal.y,
  };
}
