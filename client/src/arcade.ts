import type { MatchOptions, PlayerSnapshot, PongSnapshot } from './game/types';

const PROTOCOL = 'arcade-hub.v1';
const GAME_ID = 'pong87';
const GAME_VERSION = '0.1.0';

export type ArcadeUser = {
  userId: string;
  displayName: string;
  avatarUrl?: string;
  rpgSessionId: string;
  origin: string;
};

export type LaunchTokenPayload = {
  tokenId: string;
  gameId: string;
  roomId?: string;
  user: ArcadeUser;
  returnUrl?: string;
  issuedAt: string;
  expiresAt: string;
};

export type ArcadeSession = {
  token: string;
  payload: LaunchTokenPayload;
  roomId?: string;
  returnUrl?: string;
  hubUrl: string;
  offline: boolean;
  sides?: number;
};

export type ArcadeTelemetryEventType =
  | 'game.client_ready'
  | 'room.joined'
  | 'match.finished'
  | 'error.client'
  | string;

export type ArcadeTelemetryEnvelope = {
  protocol: typeof PROTOCOL;
  eventId: string;
  eventType: ArcadeTelemetryEventType;
  source: {
    gameId: string;
    runtime: 'client' | 'server';
    version: string;
  };
  occurredAt: string;
  roomId?: string;
  matchId?: string;
  userId?: string;
  sessionId?: string;
  payload?: Record<string, unknown>;
};

export function readArcadeQuery() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('arcadeToken') || '';
  if (!token) return null;

  return {
    token,
    roomId: params.get('room') || undefined,
    returnUrl: params.get('returnUrl') || undefined,
    offline: params.get('offline') === '1',
    sides: params.get('sides') ? Number(params.get('sides')) : undefined,
    hubUrl: params.get('hubUrl') || import.meta.env.VITE_ARCADE_HUB_URL || `http://${window.location.hostname || '127.0.0.1'}:2580`,
  };
}

async function postHub<T>(session: ArcadeSession, path: string, body: unknown, keepalive = false): Promise<T | null> {
  const response = await fetch(`${session.hubUrl}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    keepalive,
  });
  if (!response.ok) return null;
  return response.json() as Promise<T>;
}

export async function loadArcadeSession(): Promise<ArcadeSession | null> {
  const query = readArcadeQuery();
  if (!query) return null;

  const response = await fetch(`${query.hubUrl}/api/launch-token/validate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: query.token }),
  });
  if (!response.ok) throw new Error('Arcade token invalido');

  const result = await response.json() as { valid: boolean; payload?: LaunchTokenPayload };
  if (!result.valid || !result.payload) throw new Error('Arcade token expirado');

  return {
    token: query.token,
    payload: result.payload,
    roomId: query.roomId || result.payload.roomId,
    returnUrl: query.returnUrl || result.payload.returnUrl,
    hubUrl: query.hubUrl,
    offline: query.offline,
    sides: query.sides,
  };
}

export function createTelemetryEnvelope(
  session: ArcadeSession,
  eventType: ArcadeTelemetryEventType,
  payload: Record<string, unknown> = {},
  sessionId?: string,
): ArcadeTelemetryEnvelope {
  return {
    protocol: PROTOCOL,
    eventId: crypto.randomUUID(),
    eventType,
    source: {
      gameId: GAME_ID,
      runtime: 'client',
      version: GAME_VERSION,
    },
    occurredAt: new Date().toISOString(),
    roomId: session.roomId,
    userId: session.payload.user.userId,
    sessionId,
    payload,
  };
}

export async function reportArcadeTelemetry(
  session: ArcadeSession,
  eventType: ArcadeTelemetryEventType,
  payload: Record<string, unknown> = {},
  sessionId?: string,
) {
  await postHub(session, '/api/telemetry', createTelemetryEnvelope(session, eventType, payload, sessionId), true);
}

export function arcadeJoinOptions(session: ArcadeSession, options?: MatchOptions) {
  return {
    name: session.payload.user.displayName,
    arcadeToken: session.token,
    arcadeRoomId: session.roomId,
    arcadeUserId: session.payload.user.userId,
    arcadeOrigin: session.payload.user.origin,
    arcadeHubUrl: session.hubUrl,
    ...(options || {}),
  };
}

export function buildMatchResult(session: ArcadeSession, snapshot: PongSnapshot) {
  const ranked = [...snapshot.seats]
    .filter((player) => player.connected)
    .sort((a, b) => (
      snapshot.mode === 'score'
        ? b.score - a.score || b.lives - a.lives
        : b.lives - a.lives || b.score - a.score
    ));
  const winner = ranked[0];

  return {
    gameId: GAME_ID,
    roomId: session.roomId,
    winnerUserId: userIdForPlayer(session, winner),
    finishedAt: new Date().toISOString(),
    players: ranked.map((player, index) => ({
      userId: userIdForPlayer(session, player) || player.id,
      displayName: player.name,
      score: player.score,
      placement: index + 1,
      metadata: {
        sessionId: player.id,
        edgeIndex: player.edgeIndex,
        lives: player.lives,
        bot: player.id.startsWith('bot-'),
      },
    })),
    metadata: {
      mode: snapshot.mode,
      sides: snapshot.sides,
      round: snapshot.round,
      matchTimeSeconds: snapshot.matchTimeSeconds,
      source: 'pong87-client',
    },
  };
}

function userIdForPlayer(session: ArcadeSession, player?: PlayerSnapshot) {
  if (!player || player.id.startsWith('bot-')) return undefined;
  if (player.id === 'offline-human') return session.payload.user.userId;
  return player.id;
}

export async function reportArcadeResult(session: ArcadeSession, snapshot: PongSnapshot) {
  await postHub(session, '/api/results', buildMatchResult(session, snapshot), true);
}

export function returnToArcade(session: ArcadeSession | null) {
  if (session?.returnUrl) {
    window.location.assign(session.returnUrl);
    return;
  }
  window.close();
}
