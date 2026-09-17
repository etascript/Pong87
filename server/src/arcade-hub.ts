import { appendFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

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

const __dirname = dirname(fileURLToPath(import.meta.url));
const telemetryLogPath = join(__dirname, '..', 'logs', 'telemetry.jsonl');
const hubUrl = process.env.ARCADE_HUB_URL || 'http://127.0.0.1:2580';
const protocol = 'arcade-hub.v1';
const gameId = 'pong87';
const gameVersion = '0.1.0';

function writeTelemetryLog(entry: Record<string, unknown>) {
  try {
    mkdirSync(dirname(telemetryLogPath), { recursive: true });
    appendFileSync(telemetryLogPath, JSON.stringify(entry) + '\n', 'utf8');
  } catch (error) {
    console.error('telemetry_log_failed', error);
  }
}

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
  const envelope = telemetryEnvelope(context, eventType, payload);
  writeTelemetryLog(envelope);
  if (!context.token) return;
  void post('/api/telemetry', envelope, context.hubUrl);
}

export function reportArcadeResult(
  context: ArcadeContext,
  players: ArcadePlayerResult[],
  metadata: Record<string, unknown> = {},
) {
  const winner = players.find((player) => player.placement === 1) || players[0];
  const result = {
    gameId,
    roomId: context.roomId,
    winnerUserId: winner?.userId,
    finishedAt: new Date().toISOString(),
    players,
    metadata: {
      ...metadata,
      source: 'pong87-server',
    },
  };
  writeTelemetryLog({
    protocol,
    eventId: crypto.randomUUID(),
    eventType: 'match.result',
    source: {
      gameId,
      runtime: 'server',
      version: gameVersion,
    },
    occurredAt: new Date().toISOString(),
    roomId: context.roomId,
    userId: context.userId,
    payload: result,
  });
  if (!context.token) return;
  void post('/api/results', result, context.hubUrl);
}
