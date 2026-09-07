import express from 'express';
import { appendFileSync, mkdirSync } from 'fs';
import { createServer } from 'http';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Client, Room, Server } from 'colyseus';
import { WebSocketTransport } from '@colyseus/ws-transport';
import { ArraySchema, MapSchema, Schema, type } from '@colyseus/schema';
import {
  ARENA_RADIUS,
  BALL_RADIUS,
  BALL_SPAWN_INTERVAL,
  BALL_SPEED,
  activeBallLimitForMatch,
  ballSpeedForHitCount,
  respawnBallSpeedForPlayerCount,
  DEFAULT_SCORE_TIME,
  DEFAULT_PLAYER_COUNT,
  FIXED_DT,
  MAX_PLAYERS,
  MATCH_TIME_STEP,
  MIN_MATCH_TIME,
  MIN_PLAYERS,
  PADDLE_LENGTH,
  PLAYER_LIVES,
  ROUND_START_DELAY,
  SERVER_PORT,
} from '../../shared/constants';
import {
  arenaEdgeForPlayer,
  arenaPlayerForEdge,
  clamp,
  dot,
  playfieldRadius,
  playfieldSides,
  polygonEdges,
  reflect,
  Vec2,
} from '../../shared/geometry';
import { createObstacleSet } from '../../shared/obstacles';
import { reportArcadeEvent, reportArcadeResult, type ArcadeContext, type ArcadePlayerResult } from './arcade-hub';

const __dirname = dirname(fileURLToPath(import.meta.url));
const activityLogPath = join(__dirname, '..', 'logs', 'activity.jsonl');
const READY_BOT_FILL_DELAY = 60;

function writeActivity(event: string, payload: Record<string, unknown>) {
  try {
    mkdirSync(dirname(activityLogPath), { recursive: true });
    appendFileSync(activityLogPath, JSON.stringify({ at: new Date().toISOString(), event, ...payload }) + '\n', 'utf8');
  } catch (error) {
    console.error('activity_log_failed', error);
  }
}

class PlayerState extends Schema {
  @type('string') id = '';
  @type('string') name = '';
  @type('number') edgeIndex = 0;
  @type('number') paddle = 0.5;
  @type('number') lives = PLAYER_LIVES;
  @type('number') score = 0;
  @type('boolean') charge = false;
  @type('boolean') ready = false;
  @type('boolean') connected = true;
}

class BallState extends Schema {
  @type('string') id = '';
  @type('number') x = 0;
  @type('number') y = 0;
  @type('number') vx = BALL_SPEED;
  @type('number') vy = BALL_SPEED * 0.35;
  @type('number') lastTouchEdge = -1;
  @type('number') chargedBy = -1;
  @type('number') age = 0;
  @type('number') hitCount = 0;
}

class ObstacleState extends Schema {
  @type('string') id = '';
  @type('number') x = 0;
  @type('number') y = 0;
  @type('number') radius = 0.5;
  @type('number') sides = 3;
  @type('number') angle = 0;
  @type('number') spin = 0;
  @type('string') variant = 'post';
}

class PongState extends Schema {
  @type('number') sides = DEFAULT_PLAYER_COUNT;
  @type('string') phase = 'lobby';
  @type('string') lastEvent = 'Esperando jugadores';
  @type('number') round = 1;
  @type('number') countdown = ROUND_START_DELAY;
  @type('number') remainingTime = DEFAULT_SCORE_TIME;
  @type('number') matchTimeSeconds = DEFAULT_SCORE_TIME;
  @type('number') livesPerPlayer = PLAYER_LIVES;
  @type('number') lastTouchEdge = -1;
  @type('number') chargedBy = -1;
  @type('string') mode = 'elimination';
  @type(BallState) ball = new BallState();
  @type([BallState]) balls = new ArraySchema<BallState>();
  @type([ObstacleState]) obstacles = new ArraySchema<ObstacleState>();
  @type([PlayerState]) seats = new ArraySchema<PlayerState>();
  @type({ map: PlayerState }) players = new MapSchema<PlayerState>();
}

type JoinOptions = {
  name?: string;
  sides?: number;
  mode?: 'score' | 'elimination';
  lives?: number;
  matchTimeSeconds?: number;
  arcadeToken?: string;
  arcadeRoomId?: string;
  arcadeUserId?: string;
  arcadeOrigin?: string;
  arcadeHubUrl?: string;
};

type InputMessage = {
  paddle?: number;
  charge?: boolean;
  ready?: boolean;
  forceStart?: boolean;
};

export class PongRoom extends Room<PongState> {
  maxClients = MAX_PLAYERS;
  private elapsed = 0;
  private inputs = new Map<string, number>();
  private paddleVelocities = new Map<string, number>();
  private obstacleSetId = 0;
  private obstacleTimer = 3.5;
  private obstacleLifetime = 0;
  private ballSetId = 0;
  private ballSpawnTimer = BALL_SPAWN_INTERVAL;
  private matchElapsed = 0;
  private arcadeContext: ArcadeContext = {};
  private arcadeUserIds = new Map<string, string>();
  private readyDeadlineAt = 0;
  private readyNoticeSecond = -1;

  onCreate(options: JoinOptions) {
    const sides = clamp(Math.round(options.sides || DEFAULT_PLAYER_COUNT), MIN_PLAYERS, MAX_PLAYERS);
    const mode = options.mode === 'score' ? 'score' : 'elimination';
    const livesPerPlayer = clamp(Math.round(options.lives || PLAYER_LIVES), 1, 9);
    const requestedTime = Math.round((options.matchTimeSeconds ?? (mode === 'score' ? DEFAULT_SCORE_TIME : 0)) / MATCH_TIME_STEP) * MATCH_TIME_STEP;
    const matchTimeSeconds = mode === 'score'
      ? Math.max(MIN_MATCH_TIME, requestedTime || DEFAULT_SCORE_TIME)
      : requestedTime > 0
        ? Math.max(MIN_MATCH_TIME, requestedTime)
        : 0;
    this.maxClients = sides;
    this.roomId = options.arcadeRoomId?.trim().slice(0, 32) || this.roomId.slice(0, 5).toUpperCase();
    this.arcadeContext = {
      token: options.arcadeToken,
      roomId: options.arcadeRoomId || this.roomId,
      userId: options.arcadeUserId,
      origin: options.arcadeOrigin,
      hubUrl: options.arcadeHubUrl,
    };
    this.setState(new PongState());
    this.state.sides = sides;
    this.state.mode = mode;
    this.state.livesPerPlayer = livesPerPlayer;
    this.state.matchTimeSeconds = matchTimeSeconds;
    this.state.remainingTime = matchTimeSeconds;
    writeActivity('room_created', {
      roomId: this.roomId,
      sides,
      mode,
      livesPerPlayer,
      matchTimeSeconds,
    });
    reportArcadeEvent(this.arcadeContext, 'room.created', {
      colyseusRoomId: this.roomId,
      sides,
      mode,
      livesPerPlayer,
      matchTimeSeconds,
    });

    for (let index = 0; index < sides; index += 1) {
      const seat = new PlayerState();
      seat.id = `seat-${index}`;
      seat.name = `Arista ${index + 1}`;
      seat.edgeIndex = index;
      seat.connected = false;
      this.state.seats.push(seat);
    }

    this.resetBall();
    this.onMessage('input', (client, message: InputMessage) => this.handleInput(client, message));
    this.setSimulationInterval((delta) => this.update(delta / 1000), FIXED_DT * 1000);
  }

  onJoin(client: Client, options: JoinOptions) {
    if (this.state.phase === 'lobby' || this.state.phase === 'results') {
      this.clearBots();
    }

    const replacingBot = this.state.phase === 'playing' || this.state.phase === 'countdown';
    const seat = replacingBot
      ? this.state.seats.find((candidate) => this.isBot(candidate))
      : this.state.seats.find((candidate) => !candidate.connected);
    if (!seat) {
      client.leave(4001);
      return;
    }

    const inheritedScore = replacingBot ? seat.score : 0;
    const inheritedLives = replacingBot ? Math.max(1, seat.lives) : this.state.livesPerPlayer;
    const inheritedPaddle = replacingBot ? seat.paddle : 0.5;
    seat.id = client.sessionId;
    seat.name = options.name?.trim().slice(0, 16) || `Jugador ${seat.edgeIndex + 1}`;
    seat.connected = true;
    seat.ready = replacingBot;
    seat.charge = false;
    seat.lives = inheritedLives;
    seat.score = inheritedScore;
    seat.paddle = inheritedPaddle;
    this.state.players.set(client.sessionId, seat);
    this.inputs.set(client.sessionId, seat.paddle);
    this.paddleVelocities.set(client.sessionId, 0);
    if (options.arcadeUserId) this.arcadeUserIds.set(client.sessionId, options.arcadeUserId);
    this.state.lastEvent = replacingBot ? `${seat.name} reemplaza IA` : `${seat.name} entro`;
    writeActivity('player_joined', { roomId: this.roomId, sessionId: client.sessionId, edgeIndex: seat.edgeIndex, name: seat.name, replacingBot });
    reportArcadeEvent(this.arcadeContext, 'room.joined', {
      sessionId: client.sessionId,
      userId: options.arcadeUserId,
      origin: options.arcadeOrigin,
      edgeIndex: seat.edgeIndex,
      name: seat.name,
      replacingBot,
    });
  }

  onLeave(client: Client) {
    const player = this.state.players.get(client.sessionId);
    if (!player) return;

    player.connected = false;
    player.ready = false;
    player.charge = false;
    player.name = `Arista ${player.edgeIndex + 1}`;
    player.id = `seat-${player.edgeIndex}`;
    player.lives = this.state.livesPerPlayer;
    player.score = 0;
    player.paddle = 0.5;
    this.state.players.delete(client.sessionId);
    this.inputs.delete(client.sessionId);
    this.paddleVelocities.delete(client.sessionId);
    const arcadeUserId = this.arcadeUserIds.get(client.sessionId);
    this.arcadeUserIds.delete(client.sessionId);
    this.clearBots();
    this.readyDeadlineAt = 0;
    this.readyNoticeSecond = -1;
    this.state.obstacles.clear();
    this.obstacleTimer = 3.5;
    this.obstacleLifetime = 0;
    this.state.phase = 'results';
    this.state.lastEvent = 'Un jugador salio';
    writeActivity('player_left', { roomId: this.roomId, sessionId: client.sessionId, edgeIndex: player.edgeIndex });
    reportArcadeEvent(this.arcadeContext, 'room.left', {
      sessionId: client.sessionId,
      userId: arcadeUserId,
      edgeIndex: player.edgeIndex,
    });
    this.resetBall();
  }

  private handleInput(client: Client, message: InputMessage) {
    const player = this.state.players.get(client.sessionId);
    if (!player) return;

    if (typeof message.paddle === 'number') {
      this.inputs.set(client.sessionId, clamp(message.paddle, 0, 1));
    }

    if (message.charge) {
      player.charge = true;
    }

    if (message.forceStart && this.state.phase === 'lobby') {
      player.ready = true;
      this.readyDeadlineAt = 0;
      this.readyNoticeSecond = -1;
      this.state.lastEvent = 'Completando con IA';
      writeActivity('ready_wait_skipped', { roomId: this.roomId, sessionId: client.sessionId, humans: this.humanPlayers().length, sides: this.state.sides });
      reportArcadeEvent(this.arcadeContext, 'room.ready_wait_skipped', {
        sessionId: client.sessionId,
        userId: this.arcadeUserIds.get(client.sessionId),
        humans: this.humanPlayers().length,
        sides: this.state.sides,
      });
      this.startMatchWithBots();
      return;
    }

    if (typeof message.ready === 'boolean') {
      player.ready = message.ready;
      if (!message.ready) {
        this.readyDeadlineAt = 0;
        this.readyNoticeSecond = -1;
      }
      this.tryStart();
    }
  }

  private tryStart() {
    const humans = this.humanPlayers();
    const readyHumans = humans.filter((player) => player.ready);
    if (readyHumans.length === 0) {
      this.readyDeadlineAt = 0;
      this.readyNoticeSecond = -1;
      this.state.lastEvent = 'Esperando jugadores';
      return;
    }

    const allReady = humans.every((player) => player.ready);
    if (!allReady) {
      this.state.lastEvent = 'Esperando ready';
      return;
    }

    if (humans.length >= this.state.sides || (this.readyDeadlineAt > 0 && this.elapsed >= this.readyDeadlineAt)) {
      this.startMatchWithBots();
      return;
    }

    if (this.readyDeadlineAt <= 0) {
      this.readyDeadlineAt = this.elapsed + READY_BOT_FILL_DELAY;
      this.readyNoticeSecond = READY_BOT_FILL_DELAY;
      this.state.lastEvent = `Esperando jugadores ${READY_BOT_FILL_DELAY}s`;
      writeActivity('ready_wait_started', { roomId: this.roomId, seconds: READY_BOT_FILL_DELAY, humans: humans.length, sides: this.state.sides });
      reportArcadeEvent(this.arcadeContext, 'room.ready_wait_started', {
        seconds: READY_BOT_FILL_DELAY,
        humans: humans.length,
        sides: this.state.sides,
      });
    }
  }

  private startMatchWithBots() {
    this.readyDeadlineAt = 0;
    this.readyNoticeSecond = -1;
    this.fillEmptySeatsWithBots();
    const connected = this.connectedPlayers();
    connected.forEach((player) => {
      player.lives = this.state.livesPerPlayer;
      player.score = 0;
      player.charge = false;
      player.ready = true;
    });
    this.state.phase = 'countdown';
    this.state.countdown = ROUND_START_DELAY;
    this.state.round = 1;
    this.state.remainingTime = this.state.matchTimeSeconds;
    this.matchElapsed = 0;
    this.state.obstacles.clear();
    this.obstacleTimer = 0;
    this.obstacleLifetime = 0;
    const botCount = connected.filter((player) => this.isBot(player)).length;
    this.state.lastEvent = botCount > 0 ? `${botCount} IA completan la sala` : 'Preparados';
    writeActivity('match_started', {
      roomId: this.roomId,
      mode: this.state.mode,
      sides: this.state.sides,
      livesPerPlayer: this.state.livesPerPlayer,
      matchTimeSeconds: this.state.matchTimeSeconds,
      players: this.connectedPlayers().map((player) => ({ id: player.id, name: player.name, edgeIndex: player.edgeIndex, bot: this.isBot(player) })),
    });
    reportArcadeEvent(this.arcadeContext, 'match.started', {
      mode: this.state.mode,
      sides: this.state.sides,
      livesPerPlayer: this.state.livesPerPlayer,
      matchTimeSeconds: this.state.matchTimeSeconds,
      players: this.connectedPlayers().map((player) => ({
        id: this.userIdForPlayer(player),
        sessionId: player.id,
        name: player.name,
        edgeIndex: player.edgeIndex,
        bot: this.isBot(player),
      })),
    });
    this.resetBall();
  }

  private connectedPlayers() {
    return this.state.seats.filter((player) => player.connected);
  }

  private humanPlayers() {
    return Array.from(this.state.players.values()).filter((player) => player.connected);
  }

  private isBot(player: PlayerState) {
    return player.id.startsWith('bot-');
  }

  private userIdForPlayer(player: PlayerState) {
    return this.isBot(player) ? player.id : this.arcadeUserIds.get(player.id) || player.id;
  }

  private rankedResults() {
    const ranked = this.connectedPlayers().sort((a, b) => (
      this.state.mode === 'score'
        ? b.score - a.score || b.lives - a.lives
        : b.lives - a.lives || b.score - a.score
    ));
    return ranked.map<ArcadePlayerResult>((player, index) => ({
      userId: this.userIdForPlayer(player),
      displayName: player.name,
      score: player.score,
      placement: index + 1,
      metadata: {
        sessionId: player.id,
        edgeIndex: player.edgeIndex,
        lives: player.lives,
        bot: this.isBot(player),
      },
    }));
  }

  private reportMatchFinished(reason: string) {
    const results = this.rankedResults();
    reportArcadeEvent(this.arcadeContext, 'match.finished', {
      reason,
      mode: this.state.mode,
      sides: this.state.sides,
      round: this.state.round,
      players: results,
    });
    reportArcadeResult(this.arcadeContext, results, {
      reason,
      mode: this.state.mode,
      sides: this.state.sides,
      round: this.state.round,
      matchTimeSeconds: this.state.matchTimeSeconds,
    });
  }

  private fillEmptySeatsWithBots() {
    this.state.seats.forEach((seat) => {
      if (seat.connected) return;

      seat.id = `bot-${seat.edgeIndex}`;
      seat.name = `IA ${seat.edgeIndex}`;
      seat.connected = true;
      seat.ready = true;
      seat.lives = this.state.livesPerPlayer;
      seat.score = 0;
      seat.charge = false;
      seat.paddle = 0.5;
    });
  }

  private clearBots() {
    this.state.seats.forEach((seat) => {
      if (!this.isBot(seat)) return;

      seat.id = `seat-${seat.edgeIndex}`;
      seat.name = `Arista ${seat.edgeIndex + 1}`;
      seat.connected = false;
      seat.ready = false;
      seat.lives = this.state.livesPerPlayer;
      seat.score = 0;
      seat.charge = false;
      seat.paddle = 0.5;
    });
  }

  private nextObstacleLifetime() {
    return 8 + Math.random() * 5;
  }

  private generateObstacleSet() {
    this.state.obstacles.clear();
    const radius = playfieldRadius(this.state.sides, ARENA_RADIUS);
    const obstacles = createObstacleSet(this.state.sides, radius, 'srv', this.obstacleSetId);

    for (const config of obstacles) {
      const obstacle = new ObstacleState();
      obstacle.id = config.id;
      obstacle.x = config.x;
      obstacle.y = config.y;
      obstacle.radius = config.radius;
      obstacle.sides = config.sides;
      obstacle.angle = config.angle;
      obstacle.spin = config.spin;
      obstacle.variant = config.variant;
      this.state.obstacles.push(obstacle);
    }

    this.obstacleSetId += 1;
    this.obstacleLifetime = this.nextObstacleLifetime();
    this.obstacleTimer = 0;
  }

  private updateObstacles(deltaSeconds: number) {
    if (this.state.phase !== 'playing') return;

    this.state.obstacles.forEach((obstacle) => {
      obstacle.angle += obstacle.spin * deltaSeconds;
    });

    if (this.obstacleLifetime > 0) {
      this.obstacleLifetime -= deltaSeconds;
      if (this.obstacleLifetime <= 0) {
        this.generateObstacleSet();
        writeActivity('obstacles_refreshed', { roomId: this.roomId, count: this.state.obstacles.length });
      }
      return;
    }

    this.obstacleTimer -= deltaSeconds;
    if (this.obstacleTimer <= 0) {
      this.generateObstacleSet();
      writeActivity('obstacles_generated', {
        roomId: this.roomId,
        count: this.state.obstacles.length,
        obstacles: this.state.obstacles.map((obstacle) => ({
          id: obstacle.id,
          x: obstacle.x,
          y: obstacle.y,
          radius: obstacle.radius,
          sides: obstacle.sides,
          variant: obstacle.variant,
        })),
      });
    }
  }

  private finishMatchByTime() {
    const players = this.connectedPlayers();
    const topScore = Math.max(...players.map((player) => player.score), 0);
    const winners = players.filter((player) => player.score === topScore);
    this.state.phase = 'lobby';
    this.state.lastEvent = winners.length === 1 ? `${winners[0].name} gana por tiempo` : 'Empate por tiempo';
    this.state.obstacles.clear();
    this.humanPlayers().forEach((candidate) => {
      candidate.ready = false;
    });
    writeActivity('match_finished', {
      roomId: this.roomId,
      reason: 'time',
      winners: winners.map((player) => ({ id: player.id, name: player.name, edgeIndex: player.edgeIndex })),
      scores: players.map((player) => ({ id: player.id, name: player.name, edgeIndex: player.edgeIndex, score: player.score, lives: player.lives })),
    });
    this.reportMatchFinished('time');
    this.clearBots();
    this.resetBall();
  }

  private update(deltaSeconds: number) {
    this.elapsed += deltaSeconds;

    for (const player of this.state.players.values()) {
      const target = this.inputs.get(player.id) ?? player.paddle;
      const previous = player.paddle;
      player.paddle += (target - player.paddle) * Math.min(1, deltaSeconds * 18);
      this.paddleVelocities.set(player.id, (player.paddle - previous) / Math.max(deltaSeconds, 0.001));
    }

    this.updateBots(deltaSeconds);
    this.updateObstacles(deltaSeconds);

    if (this.state.phase === 'lobby' && this.readyDeadlineAt > 0) {
      const remaining = Math.max(0, Math.ceil(this.readyDeadlineAt - this.elapsed));
      if (remaining !== this.readyNoticeSecond) {
        this.readyNoticeSecond = remaining;
        this.state.lastEvent = remaining > 0 ? `Esperando jugadores ${remaining}s` : 'Completando con IA';
      }
      this.tryStart();
      return;
    }

    if (this.state.phase === 'countdown') {
      this.state.countdown -= deltaSeconds;
      if (this.state.countdown <= 0) {
        this.state.phase = 'playing';
        this.state.lastEvent = 'En juego';
      }
      return;
    }

    if (this.state.phase !== 'playing') return;

    if (this.state.matchTimeSeconds > 0) {
      this.state.remainingTime = Math.max(0, this.state.remainingTime - deltaSeconds);
      if (this.state.remainingTime <= 0) {
        this.finishMatchByTime();
        return;
      }
    }

    this.matchElapsed += deltaSeconds;
    this.updateBalls(deltaSeconds);
    this.syncPrimaryBall();
  }

  private updateBalls(deltaSeconds: number) {
    const activeBallLimit = activeBallLimitForMatch(this.state.sides, this.matchElapsed);
    this.ballSpawnTimer += deltaSeconds;
    if (this.state.balls.length < activeBallLimit && this.ballSpawnTimer >= BALL_SPAWN_INTERVAL) {
      this.spawnBall();
      this.ballSpawnTimer = 0;
      writeActivity('ball_spawned', { roomId: this.roomId, count: this.state.balls.length });
    }

    for (let index = this.state.balls.length - 1; index >= 0; index -= 1) {
      const ball = this.state.balls[index];
      ball.age += deltaSeconds;
      ball.x += ball.vx * deltaSeconds;
      ball.y += ball.vy * deltaSeconds;
      this.resolveObstacleCollisions(ball);
      this.resolveBallCollisions(ball, index);
    }
  }

  private updateBots(deltaSeconds: number) {
    if (this.state.phase !== 'playing' && this.state.phase !== 'countdown') return;

    const edges = polygonEdges(playfieldSides(this.state.sides), playfieldRadius(this.state.sides, ARENA_RADIUS));

    for (const player of this.state.seats) {
      if (!this.isBot(player) || player.lives <= 0) continue;

      const edge = edges[arenaEdgeForPlayer(player.edgeIndex, this.state.sides)];
      const predictions = [...this.state.balls]
        .map((ball) => ({
          ball,
          prediction: this.predictBallEdgeT(edge, { x: ball.x, y: ball.y }, { x: ball.vx, y: ball.vy }),
        }))
        .filter((candidate) => candidate.prediction);
      const threat = predictions.sort((a, b) => (a.prediction?.time ?? 99) - (b.prediction?.time ?? 99))[0];
      const prediction = threat?.prediction ?? null;
      const ball = threat?.ball ?? this.state.balls[0] ?? this.state.ball;
      const personality = 0.5 + ((player.edgeIndex * 37) % 5) * 0.08;
      const patrol = 0.5 + Math.sin(this.elapsed * (0.85 + personality) + player.edgeIndex * 2.1) * 0.26;
      const edgeVelocity = dot({ x: ball.vx, y: ball.vy }, edge.tangent);
      const attackBias = clamp(edgeVelocity / 12, -0.14, 0.14);
      const pressure = prediction ? clamp(1.25 - prediction.time, 0, 1) : 0;
      const mistake = Math.sin(this.elapsed * 3.1 + player.edgeIndex * 1.7) * (0.11 - pressure * 0.045);
      const target = prediction ? prediction.t + attackBias * pressure + mistake : patrol;
      const reaction = clamp(target, 0.08, 0.92);
      const maxStep = deltaSeconds * (0.56 + pressure * 1.28 + personality * 0.18);
      const previous = player.paddle;
      player.paddle += clamp(reaction - player.paddle, -maxStep, maxStep);
      this.paddleVelocities.set(player.id, (player.paddle - previous) / Math.max(deltaSeconds, 0.001));
    }
  }

  private predictBallEdgeT(
    edge: { a: Vec2; tangent: Vec2; inward: Vec2; length: number },
    position: Vec2,
    velocity: Vec2,
  ) {
    const denom = dot(velocity, edge.inward);
    if (denom >= -0.001) return null;

    const fromA = { x: position.x - edge.a.x, y: position.y - edge.a.y };
    const inwardDistance = dot(fromA, edge.inward);
    const timeToEdge = (BALL_RADIUS - inwardDistance) / denom;
    if (timeToEdge < 0 || timeToEdge > 2.5) return null;

    const hitPoint = {
      x: position.x + velocity.x * timeToEdge,
      y: position.y + velocity.y * timeToEdge,
    };
    const along = dot({ x: hitPoint.x - edge.a.x, y: hitPoint.y - edge.a.y }, edge.tangent);
    return {
      t: clamp(along / edge.length, 0, 1),
      time: timeToEdge,
    };
  }

  private resetBall(towardEdge = -1) {
    this.state.balls.clear();
    this.spawnBall(towardEdge);
    this.ballSpawnTimer = 0;
    this.syncPrimaryBall();
  }

  private spawnBall(towardEdge = -1, inheritedSpeed = 0) {
    const edges = polygonEdges(playfieldSides(this.state.sides), playfieldRadius(this.state.sides, ARENA_RADIUS));
    const arenaEdge = towardEdge >= 0 ? arenaEdgeForPlayer(towardEdge, this.state.sides) : -1;
    const angleBase = arenaEdge >= 0
      ? Math.atan2(-edges[arenaEdge].inward.y, -edges[arenaEdge].inward.x)
      : this.state.sides === 2
        ? (Math.random() < 0.5 ? 0 : Math.PI)
        : Math.random() * Math.PI * 2;
    const jitter = (Math.random() - 0.5) * 0.65;
    const angle = angleBase + jitter;
    const ball = new BallState();
    ball.id = `srv-ball-${this.ballSetId}`;
    ball.x = (Math.random() - 0.5) * 0.55;
    ball.y = (Math.random() - 0.5) * 0.55;
    const speed = respawnBallSpeedForPlayerCount(this.state.sides, this.state.balls.length, inheritedSpeed);
    ball.vx = Math.cos(angle) * speed;
    ball.vy = Math.sin(angle) * speed;
    ball.lastTouchEdge = -1;
    ball.chargedBy = -1;
    ball.age = 0;
    ball.hitCount = 0;
    this.ballSetId += 1;
    this.state.balls.push(ball);
    this.syncPrimaryBall();
  }

  private accelerateBallAfterHit(ball: BallState, bonusSpeed = 0) {
    ball.hitCount += 1;
    const currentSpeed = Math.hypot(ball.vx, ball.vy) || BALL_SPEED;
    const targetSpeed = ballSpeedForHitCount(ball.hitCount, this.state.sides) + bonusSpeed;
    ball.vx = (ball.vx / currentSpeed) * targetSpeed;
    ball.vy = (ball.vy / currentSpeed) * targetSpeed;
  }

  private removeBall(ballIndex: number, towardEdge = -1) {
    const removedBall = this.state.balls[ballIndex];
    const inheritedSpeed = removedBall ? Math.hypot(removedBall.vx, removedBall.vy) : 0;
    this.state.balls.splice(ballIndex, 1);
    if (this.state.phase === 'playing' && this.state.balls.length < activeBallLimitForMatch(this.state.sides, this.matchElapsed)) {
      this.spawnBall(towardEdge, inheritedSpeed);
      this.ballSpawnTimer = 0;
    }
    this.syncPrimaryBall();
  }

  private syncPrimaryBall() {
    const primary = this.state.balls[0];
    if (!primary) {
      this.state.ball.x = 0;
      this.state.ball.y = 0;
      this.state.ball.vx = 0;
      this.state.ball.vy = 0;
      this.state.lastTouchEdge = -1;
      this.state.chargedBy = -1;
      return;
    }
    this.state.ball.x = primary.x;
    this.state.ball.y = primary.y;
    this.state.ball.vx = primary.vx;
    this.state.ball.vy = primary.vy;
    this.state.lastTouchEdge = primary.lastTouchEdge;
    this.state.chargedBy = primary.chargedBy;
  }

  private resolveObstacleCollisions(ball: BallState) {
    for (const obstacle of this.state.obstacles) {
      const dx = ball.x - obstacle.x;
      const dy = ball.y - obstacle.y;
      const distance = Math.hypot(dx, dy);
      const hitDistance = obstacle.radius + BALL_RADIUS;
      if (distance > hitDistance) continue;

      const normal = distance > 0.001 ? { x: dx / distance, y: dy / distance } : { x: 1, y: 0 };
      const velocity = reflect({ x: ball.vx, y: ball.vy }, normal);
      const tangent = { x: -normal.y, y: normal.x };
      ball.vx = velocity.x + tangent.x * obstacle.spin * 0.55;
      ball.vy = velocity.y + tangent.y * obstacle.spin * 0.55;
      this.accelerateBallAfterHit(ball);
      ball.x = obstacle.x + normal.x * (hitDistance + 0.05);
      ball.y = obstacle.y + normal.y * (hitDistance + 0.05);
      ball.chargedBy = -1;
      this.state.lastEvent = 'Obstaculo desvio';
      writeActivity('obstacle_hit', {
        roomId: this.roomId,
        obstacleId: obstacle.id,
        variant: obstacle.variant,
        sides: obstacle.sides,
      });
      return;
    }
  }

  private resolveBallCollisions(ball: BallState, ballIndex: number) {
    const edges = polygonEdges(playfieldSides(this.state.sides), playfieldRadius(this.state.sides, ARENA_RADIUS));

    for (let index = 0; index < edges.length; index += 1) {
      const edge = edges[index];
      const fromA: Vec2 = { x: ball.x - edge.a.x, y: ball.y - edge.a.y };
      const inwardDistance = dot(fromA, edge.inward);
      if (inwardDistance > BALL_RADIUS) continue;

      const along = dot(fromA, edge.tangent);
      const t = along / edge.length;
      if (t < -0.02 || t > 1.02) continue;

      const playerIndex = arenaPlayerForEdge(index, this.state.sides);
      const player = playerIndex >= 0 ? this.state.seats[playerIndex] : undefined;
      if (!player) {
        const velocity = reflect({ x: ball.vx, y: ball.vy }, edge.inward);
        ball.vx = velocity.x;
        ball.vy = velocity.y;
        this.accelerateBallAfterHit(ball);
        ball.x += edge.inward.x * (BALL_RADIUS - inwardDistance + 0.05);
        ball.y += edge.inward.y * (BALL_RADIUS - inwardDistance + 0.05);
        ball.chargedBy = -1;
        this.state.lastEvent = `Muro ${index + 1} reboto`;
        return;
      }
      const paddleHalf = PADDLE_LENGTH / edge.length / 2;
      const eliminatedWall = this.state.mode === 'elimination' && player.connected && player.lives <= 0;
      const insidePaddle = player.connected && player.lives > 0 && Math.abs(t - player.paddle) <= paddleHalf;

      if (insidePaddle || eliminatedWall) {
        const velocity = reflect({ x: ball.vx, y: ball.vy }, edge.inward);
        const influence = insidePaddle ? clamp((t - player.paddle) / paddleHalf, -1, 1) : 0;
        const edgeKick = Math.sign(influence) * Math.pow(Math.abs(influence), 0.72) * 3.7;
        const motionKick = insidePaddle ? -clamp(this.paddleVelocities.get(player.id) ?? 0, -3.2, 3.2) * 1.25 : 0;
        ball.vx = velocity.x + edge.tangent.x * (edgeKick + motionKick);
        ball.vy = velocity.y + edge.tangent.y * (edgeKick + motionKick);
        const chargedHit = insidePaddle && player.charge;
        this.accelerateBallAfterHit(ball, chargedHit ? 2.3 : 0);
        ball.x += edge.inward.x * (BALL_RADIUS - inwardDistance + 0.05);
        ball.y += edge.inward.y * (BALL_RADIUS - inwardDistance + 0.05);
        if (insidePaddle) {
          ball.lastTouchEdge = player.edgeIndex;
          ball.chargedBy = chargedHit ? player.edgeIndex : -1;
          this.state.lastTouchEdge = player.edgeIndex;
          this.state.chargedBy = ball.chargedBy;
          player.charge = false;
          this.state.lastEvent = `${player.name} bloqueo`;
        } else {
          ball.chargedBy = -1;
          this.state.lastEvent = `Muro ${player.edgeIndex + 1} reboto`;
        }
        return;
      }

      if (this.state.mode === 'score') {
        const scorer = this.state.seats[ball.lastTouchEdge];
        if (scorer && scorer.connected && scorer.edgeIndex !== player.edgeIndex) {
          scorer.score += 1;
          this.state.lastEvent = `${scorer.name} anota`;
          writeActivity('score_awarded', {
            roomId: this.roomId,
            scorerId: scorer.id,
            scorerName: scorer.name,
            missedById: player.id,
            missedByName: player.name,
            score: scorer.score,
            ballId: ball.id,
          });
          reportArcadeEvent(this.arcadeContext, 'score.awarded', {
            userId: this.userIdForPlayer(scorer),
            scorerId: this.userIdForPlayer(scorer),
            scorerName: scorer.name,
            missedById: this.userIdForPlayer(player),
            missedByName: player.name,
            score: scorer.score,
            ballId: ball.id,
          });
        } else {
          this.state.lastEvent = `${player.name} fallo`;
          writeActivity('score_missed_no_touch', { roomId: this.roomId, playerId: player.id, playerName: player.name, ballId: ball.id });
        }
      } else if (player.connected && player.lives > 0) {
        player.lives = Math.max(0, player.lives - 1);
        this.state.lastEvent = player.lives === 0 ? `${player.name} eliminado` : `${player.name} perdio una vida`;
        writeActivity(player.lives === 0 ? 'player_eliminated' : 'life_lost', {
          roomId: this.roomId,
          playerId: player.id,
          playerName: player.name,
          lives: player.lives,
          ballId: ball.id,
        });
        reportArcadeEvent(this.arcadeContext, player.lives === 0 ? 'player.eliminated' : 'player.life_lost', {
          userId: this.userIdForPlayer(player),
          playerId: this.userIdForPlayer(player),
          playerName: player.name,
          lives: player.lives,
          ballId: ball.id,
        });
      }

      const alive = this.state.mode === 'score'
        ? this.connectedPlayers()
        : this.connectedPlayers().filter((candidate) => candidate.lives > 0);
      if (this.state.mode === 'elimination' && alive.length <= 1) {
        this.state.phase = 'results';
        this.state.lastEvent = alive[0] ? `${alive[0].name} gana` : 'Ronda terminada';
        this.humanPlayers().forEach((candidate) => {
          candidate.ready = false;
        });
        writeActivity('match_finished', {
          roomId: this.roomId,
          reason: 'elimination',
          winners: alive.map((player) => ({ id: player.id, name: player.name, edgeIndex: player.edgeIndex })),
          scores: this.connectedPlayers().map((player) => ({ id: player.id, name: player.name, edgeIndex: player.edgeIndex, score: player.score, lives: player.lives })),
        });
        this.reportMatchFinished('elimination');
        this.clearBots();
      } else {
        this.state.round += 1;
        this.removeBall(ballIndex, player.edgeIndex);
      }
      return;
    }
  }
}

const app = express();
app.get('/health', (_request, response) => response.json({ ok: true }));

const server = createServer(app);
const gameServer = new Server({
  transport: new WebSocketTransport({ server }),
});

gameServer.define('polygon_pong', PongRoom);

server.listen(SERVER_PORT, () => {
  console.log(`PONG 87 server listening on ws://127.0.0.1:${SERVER_PORT}`);
});
