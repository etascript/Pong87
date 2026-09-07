import type { Language } from '../i18n';
import type { ObstacleVariant } from '../../../shared/obstacles';

export type MatchMode = 'score' | 'elimination';

export type PlayerSnapshot = {
  id: string;
  name: string;
  edgeIndex: number;
  paddle: number;
  paddleVelocity: number;
  lives: number;
  score: number;
  charge: boolean;
  ready: boolean;
  connected: boolean;
};

export type ObstacleSnapshot = {
  id: string;
  x: number;
  y: number;
  radius: number;
  sides: number;
  angle: number;
  spin: number;
  variant: ObstacleVariant;
};

export type BallSnapshot = {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  lastTouchEdge: number;
  chargedBy: number;
  age: number;
  hitCount: number;
};

export type PongSnapshot = {
  sides: number;
  phase: string;
  lastEvent: string;
  round: number;
  countdown: number;
  remainingTime: number;
  matchTimeSeconds: number;
  livesPerPlayer: number;
  lastTouchEdge: number;
  mode: MatchMode;
  ball: { x: number; y: number; vx: number; vy: number };
  balls: BallSnapshot[];
  chargedBy: number;
  obstacles: ObstacleSnapshot[];
  seats: PlayerSnapshot[];
};

export type LobbyFlow = 'single' | 'multi' | null;
export type MenuView = 'main' | 'settings' | 'about' | 'exit';

export type SettingsState = {
  language: Language;
  musicVolume: number;
  sfxVolume: number;
};

export type MatchOptions = {
  mode: MatchMode;
  lives: number;
  matchTimeSeconds: number;
};
