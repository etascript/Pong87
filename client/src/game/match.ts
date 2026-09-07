import {
  DEFAULT_SCORE_TIME,
  MATCH_TIME_STEP,
  MIN_MATCH_TIME,
  PLAYER_LIVES,
} from '../../../shared/constants';
import { clamp } from '../../../shared/geometry';
import type { MatchMode, MatchOptions, PongSnapshot } from './types';

export function normalizeMatchOptions(
  modeValue: string,
  matchTimeValue: string,
  livesValue: string,
): MatchOptions {
  const mode: MatchMode = modeValue === 'elimination' ? 'elimination' : 'score';
  let matchTimeSeconds = Math.round(Number(matchTimeValue || DEFAULT_SCORE_TIME) / MATCH_TIME_STEP) * MATCH_TIME_STEP;

  if (mode === 'score') {
    matchTimeSeconds = Math.max(MIN_MATCH_TIME, matchTimeSeconds || DEFAULT_SCORE_TIME);
  } else if (matchTimeSeconds > 0) {
    matchTimeSeconds = Math.max(MIN_MATCH_TIME, matchTimeSeconds);
  }

  return {
    mode,
    lives: clamp(Math.round(Number(livesValue || PLAYER_LIVES)), 1, 9),
    matchTimeSeconds,
  };
}

export function formatTime(seconds: number) {
  const safeSeconds = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;
  return `${minutes}:${String(remainder).padStart(2, '0')}`;
}

export function rankedPlayers(snapshot: PongSnapshot) {
  return [...snapshot.seats]
    .filter((player) => player.connected)
    .sort((a, b) => snapshot.mode === 'score'
      ? b.score - a.score || b.lives - a.lives
      : b.lives - a.lives || b.score - a.score);
}
