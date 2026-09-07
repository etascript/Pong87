import {
  DEFAULT_PLAYER_COUNT,
  DEFAULT_SCORE_TIME,
  PLAYER_LIVES,
} from '../../../shared/constants';
import type { PongSnapshot } from './types';

export function createInitialSnapshot(lastEvent: string): PongSnapshot {
  return {
    sides: DEFAULT_PLAYER_COUNT,
    phase: 'lobby',
    lastEvent,
    round: 1,
    countdown: 0,
    remainingTime: DEFAULT_SCORE_TIME,
    matchTimeSeconds: DEFAULT_SCORE_TIME,
    livesPerPlayer: PLAYER_LIVES,
    lastTouchEdge: -1,
    mode: 'score',
    ball: { x: 0, y: 0, vx: 0, vy: 0 },
    balls: [],
    chargedBy: -1,
    obstacles: [],
    seats: [],
  };
}

export function resetSnapshotToLobby(snapshot: PongSnapshot, lastEvent: string): PongSnapshot {
  return {
    ...snapshot,
    phase: 'lobby',
    lastEvent,
    seats: [],
    obstacles: [],
    balls: [],
    chargedBy: -1,
  };
}
