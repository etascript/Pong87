export const SERVER_PORT = 2567;
export const DEFAULT_PLAYER_COUNT = 4;
export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 8;
export const ARENA_RADIUS = 8;
export const PADDLE_LENGTH = 2.7;
export const PADDLE_DEPTH = 0.34;
export const BALL_RADIUS = 0.28;
export const BALL_SPEED = 7.85;
export const BALL_HIT_SPEED_STEP = 0.012;
export const BALL_HIT_SPEED_MAX_MULTIPLIER = 1.26;
export const ABSOLUTE_MAX_BALLS = 6;
export const BALL_SPAWN_INTERVAL = 10;
export const PLAYER_LIVES = 5;
export const DEFAULT_SCORE_TIME = 150;
export const MIN_MATCH_TIME = 30;
export const MATCH_TIME_STEP = 30;
export const FIXED_DT = 1 / 60;
export const ROUND_START_DELAY = 1.0;

export function maxBallsForPlayerCount(playerCount: number) {
  return Math.min(ABSOLUTE_MAX_BALLS, Math.max(3, Math.ceil(playerCount * 0.75)));
}

export function activeBallLimitForMatch(playerCount: number, matchElapsedSeconds: number) {
  const progressionLimit = 1 + Math.floor(matchElapsedSeconds / BALL_SPAWN_INTERVAL);
  return Math.min(maxBallsForPlayerCount(playerCount), progressionLimit);
}

export function ballSpeedForHitCount(hitCount: number) {
  return BALL_SPEED * Math.min(BALL_HIT_SPEED_MAX_MULTIPLIER, 1 + Math.max(0, hitCount) * BALL_HIT_SPEED_STEP);
}
