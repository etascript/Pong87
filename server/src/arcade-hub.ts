export type ArcadeContext = {
  token?: string;
  roomId?: string;
  userId?: string;
  origin?: string;
  hubUrl?: string;
};

export type ArcadePlayerResult = {
  userId: string;
  displayName: string;
  score: number;
  placement?: number;
  metadata?: Record<string, unknown>;
};

const hubUrl = process.env.ARCADE_HUB_URL || 'http://127.0.0.1:2580';
const protocol = 'arcade-hub.v1';
const gameId = 'pong87';
const gameVersion = '0.1.0';

async function post(path: string, payload: Record<string, unknown>, targetHubUrl = hubUrl) {
  try {
    await fetch(`${targetHubUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('arcade_hub_report_failed', path, error);
  }
}

function telemetryEnvelope(
  context: ArcadeContext,
  eventType: string,
  payload: Record<string, unknown> = {},
) {
  return {
    protocol,
    eventId: crypto.randomUUID(),
    eventType,
    source: {
      gameId,
      runtime: 'server',
      version: gameVersion,
      },
      occurredAt: new Date().toISOString(),
      roomId: context.roomId,
      userId: typeof payload.userId === 'string' ? payload.userId : context.userId,
      sessionId: typeof payload.sessionId === 'string' ? payload.sessionId : undefined,
      payload,
    };
  }

export function reportArcadeEvent(
  context: ArcadeContext,
  eventType: string,
  payload: Record<string, unknown> = {},
) {
  if (!context.token) return;
  void post('/api/telemetry', telemetryEnvelope(context, eventType, payload), context.hubUrl);
}

export function reportArcadeResult(
  context: ArcadeContext,
  players: ArcadePlayerResult[],
  metadata: Record<string, unknown> = {},
) {
  if (!context.token) return;
  const winner = players.find((player) => player.placement === 1) || players[0];
  void post('/api/results', {
    gameId,
    roomId: context.roomId,
    winnerUserId: winner?.userId,
    finishedAt: new Date().toISOString(),
    players,
    metadata: {
      ...metadata,
      source: 'pong87-server',
    },
  }, context.hubUrl);
}
