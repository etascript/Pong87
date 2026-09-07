import './styles.css';
import { Client, Room } from 'colyseus.js';
import * as THREE from 'three';
import { createApp } from 'vue';
import App from './App.vue';
import {
  arcadeJoinOptions,
  loadArcadeSession,
  reportArcadeResult,
  reportArcadeTelemetry,
  returnToArcade,
  type ArcadeSession,
} from './arcade';
import { translate, TranslationKey } from './i18n';
import { createInitialSnapshot, resetSnapshotToLobby } from './game/client-state';
import { formatTime, normalizeMatchOptions as normalizeMatchOptionValues, rankedPlayers } from './game/match';
import { loadSettings, saveSettings as persistSettings } from './game/settings';
import type { BallSnapshot, LobbyFlow, MenuView, ObstacleSnapshot, PongSnapshot } from './game/types';
import { syncObstacleVisuals as syncObstacleMeshes } from './render/obstacles';
import {
  ABSOLUTE_MAX_BALLS,
  ARENA_RADIUS,
  BALL_RADIUS,
  BALL_SPAWN_INTERVAL,
  BALL_SPEED,
  activeBallLimitForMatch,
  ballSpeedForHitCount,
  DEFAULT_PLAYER_COUNT,
  FIXED_DT,
  MAX_PLAYERS,
  MIN_PLAYERS,
  PADDLE_DEPTH,
  PADDLE_LENGTH,
} from '../../shared/constants';
import {
  arenaEdgeForPlayer,
  arenaPlayerForEdge,
  clamp,
  dot,
  playfieldRadius,
  playfieldSides,
  polygonEdges,
  pointOnEdge,
  reflect,
  Vec2,
} from '../../shared/geometry';
import { createObstacleSet } from '../../shared/obstacles';
import { syncBallVisuals } from './render/balls';

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('Missing app root');

let settings = loadSettings();
const t = (key: TranslationKey) => translate(settings.language, key);

createApp(App).mount(app);

const canvas = document.querySelector<HTMLCanvasElement>('#gameCanvas')!;
const shell = document.querySelector<HTMLElement>('.shell')!;
const menuLayer = document.querySelector<HTMLDivElement>('#menuLayer')!;
const statusText = document.querySelector<HTMLSpanElement>('#statusText')!;
const modeText = document.querySelector<HTMLSpanElement>('#modeText')!;
const roundText = document.querySelector<HTMLSpanElement>('#roundText')!;
const roomCode = document.querySelector<HTMLElement>('#roomCode')!;
const lobbyTitle = document.querySelector<HTMLSpanElement>('#lobbyTitle')!;
const centerPanel = document.querySelector<HTMLDivElement>('#centerPanel')!;
const setupPanel = document.querySelector<HTMLDivElement>('#setupPanel')!;
const waitingPanel = document.querySelector<HTMLDivElement>('#waitingPanel')!;
const waitingRoomCode = document.querySelector<HTMLElement>('#waitingRoomCode')!;
const waitingRoster = document.querySelector<HTMLDivElement>('#waitingRoster')!;
const resultsPanel = document.querySelector<HTMLDivElement>('#resultsPanel')!;
const podiumList = document.querySelector<HTMLDivElement>('#podiumList')!;
const scoreStrip = document.querySelector<HTMLDivElement>('#scoreStrip')!;
const touchRail = document.querySelector<HTMLDivElement>('#touchRail')!;
const thumb = document.querySelector<HTMLDivElement>('#thumb')!;
const nameInput = document.querySelector<HTMLInputElement>('#nameInput')!;
const sidesInput = document.querySelector<HTMLSelectElement>('#sidesInput')!;
const gameModeInput = document.querySelector<HTMLSelectElement>('#gameModeInput')!;
const livesField = document.querySelector<HTMLLabelElement>('#livesField')!;
const livesInput = document.querySelector<HTMLInputElement>('#livesInput')!;
const matchTimeInput = document.querySelector<HTMLSelectElement>('#matchTimeInput')!;
const joinInput = document.querySelector<HTMLInputElement>('#joinInput')!;
const languageInput = document.querySelector<HTMLSelectElement>('#languageInput')!;
const musicVolumeInput = document.querySelector<HTMLInputElement>('#musicVolumeInput')!;
const sfxVolumeInput = document.querySelector<HTMLInputElement>('#sfxVolumeInput')!;
const musicVolumeValue = document.querySelector<HTMLOutputElement>('#musicVolumeValue')!;
const sfxVolumeValue = document.querySelector<HTMLOutputElement>('#sfxVolumeValue')!;
const singlePlayerButton = document.querySelector<HTMLButtonElement>('#singlePlayerButton')!;
const multiPlayerButton = document.querySelector<HTMLButtonElement>('#multiPlayerButton')!;
const settingsButton = document.querySelector<HTMLButtonElement>('#settingsButton')!;
const aboutButton = document.querySelector<HTMLButtonElement>('#aboutButton')!;
const exitButton = document.querySelector<HTMLButtonElement>('#exitButton')!;
const backButtons = document.querySelectorAll<HTMLButtonElement>('.back-button');
const createButton = document.querySelector<HTMLButtonElement>('#createButton')!;
const joinButton = document.querySelector<HTMLButtonElement>('#joinButton')!;
const offlineButton = document.querySelector<HTMLButtonElement>('#offlineButton')!;
const readyButton = document.querySelector<HTMLButtonElement>('#readyButton')!;
const menuBackButton = document.querySelector<HTMLButtonElement>('#menuBackButton')!;
const pauseButton = document.querySelector<HTMLButtonElement>('#pauseButton')!;
const gameExitButton = document.querySelector<HTMLButtonElement>('#gameExitButton')!;
const pauseMenu = document.querySelector<HTMLDivElement>('#pauseMenu')!;
const resumeButton = document.querySelector<HTMLButtonElement>('#resumeButton')!;
const pauseExitButton = document.querySelector<HTMLButtonElement>('#pauseExitButton')!;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x07090f);

const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 100);
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const worldGroup = new THREE.Group();
const arenaGroup = new THREE.Group();
const paddleGroup = new THREE.Group();
const obstacleGroup = new THREE.Group();
const ballGroup = new THREE.Group();
worldGroup.add(arenaGroup, paddleGroup, obstacleGroup, ballGroup);
scene.add(worldGroup);

const colors = [0xff4f6d, 0x4fffa4, 0x65a6ff, 0xf7f75c, 0xff9a42, 0xca7cff, 0x42ecff, 0xffffff];
const pongServerUrl = import.meta.env.VITE_PONG_WS_URL || `ws://${location.hostname || '127.0.0.1'}:2567`;
const client = new Client(pongServerUrl);

let room: Room | null = null;
let mySessionId = '';
let snapshot: PongSnapshot = createInitialSnapshot(t('disconnected'));
let localPaddle = 0.5;
let localPaddleTarget = 0.5;
let localPaddleVelocity = 0;
let paused = false;
let lastSend = 0;
let offlineMode = false;
let lobbyFlow: LobbyFlow = null;
let lastFrame = performance.now();
let fixedAccumulator = 0;
let activePointerId: number | null = null;
let pointerStartX = 0;
let paddleStart = 0.5;
let dragMoved = false;
const pressedKeys = new Set<string>();
let currentArenaKey = '';
let obstacleSetId = 0;
let obstacleTimer = 3.5;
let obstacleLifetime = 0;
let ballSetId = 0;
let ballSpawnTimer = BALL_SPAWN_INTERVAL;
let offlineMatchElapsed = 0;
let scoreFlash = 0;
let scoreSignature = '';
let arcadeSession: ArcadeSession | null = null;
let reportedResultSignature = '';

function rebuildArena(sides: number) {
  arenaGroup.clear();
  paddleGroup.clear();
  const arenaSides = playfieldSides(sides);
  const radius = playfieldRadius(sides, ARENA_RADIUS);
  const edges = polygonEdges(arenaSides, radius);
  currentArenaKey = `${sides}:${arenaSides}`;

  edges.forEach((edge, index) => {
    const playerIndex = arenaPlayerForEdge(index, sides);
    const railColor = playerIndex >= 0 ? colors[playerIndex % colors.length] : 0xffffff;
    const midpoint = pointOnEdge(edge, 0.5);
    const rail = new THREE.Mesh(
      new THREE.BoxGeometry(edge.length, 0.08, 0.08),
      new THREE.MeshBasicMaterial({ color: railColor, transparent: true, opacity: playerIndex >= 0 ? 0.75 : 0.48 }),
    );
    rail.position.set(midpoint.x, midpoint.y, 0);
    rail.rotation.z = edge.angle;
    arenaGroup.add(rail);
  });

  for (let playerIndex = 0; playerIndex < sides; playerIndex += 1) {
    const edgeIndex = arenaEdgeForPlayer(playerIndex, sides);
    const paddle = new THREE.Mesh(
      new THREE.BoxGeometry(PADDLE_LENGTH, PADDLE_DEPTH, 0.18),
      new THREE.MeshBasicMaterial({ color: colors[playerIndex % colors.length], transparent: true, opacity: 1 }),
    );
    paddle.userData.playerIndex = playerIndex;
    paddle.userData.edgeIndex = edgeIndex;
    paddleGroup.add(paddle);
  }
}

function fitCamera() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;
  const mobile = width < 720;
  const radius = playfieldRadius(snapshot.sides || DEFAULT_PLAYER_COUNT, ARENA_RADIUS);
  const viewHeight = mobile ? radius * 2.75 : radius * 2.45;
  camera.top = viewHeight / 2;
  camera.bottom = -viewHeight / 2;
  camera.left = -viewHeight * aspect / 2;
  camera.right = viewHeight * aspect / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}

function currentPlayerEdgeIndex() {
  const mine = snapshot.seats.find((player) => player.id === mySessionId);
  if (!mine) return 0;
  return arenaEdgeForPlayer(mine.edgeIndex, snapshot.sides || DEFAULT_PLAYER_COUNT);
}

function targetWorldRotation() {
  const playerCount = snapshot.sides || DEFAULT_PLAYER_COUNT;
  const edges = polygonEdges(playfieldSides(playerCount), playfieldRadius(playerCount, ARENA_RADIUS));
  const edge = edges[currentPlayerEdgeIndex()] ?? edges[0];
  return -edge.angle;
}

function shortestAngleDelta(from: number, to: number) {
  return Math.atan2(Math.sin(to - from), Math.cos(to - from));
}

function activeBalls() {
  return snapshot.balls.length > 0
    ? snapshot.balls
    : [{ ...snapshot.ball, id: 'legacy-ball', lastTouchEdge: snapshot.lastTouchEdge, chargedBy: snapshot.chargedBy, age: 1, hitCount: 0 }];
}

function nextObstacleLifetime() {
  return 8 + Math.random() * 5;
}

function makeObstacleSet(playerCount: number): ObstacleSnapshot[] {
  const radius = playfieldRadius(playerCount, ARENA_RADIUS);
  const obstacles = createObstacleSet(playerCount, radius, 'local', obstacleSetId);
  obstacleSetId += 1;
  return obstacles;
}

function copyState(state: any): PongSnapshot {
  return {
    sides: state.sides,
    phase: state.phase,
    lastEvent: state.lastEvent,
    round: state.round,
    countdown: state.countdown,
    remainingTime: state.remainingTime,
    matchTimeSeconds: state.matchTimeSeconds,
    livesPerPlayer: state.livesPerPlayer,
    lastTouchEdge: state.lastTouchEdge,
    mode: state.mode,
    ball: { x: state.ball.x, y: state.ball.y, vx: state.ball.vx, vy: state.ball.vy },
    balls: Array.from(state.balls?.length ? state.balls : [state.ball]).map((ball: any, index) => ({
      id: ball.id || `legacy-${index}`,
      x: ball.x,
      y: ball.y,
      vx: ball.vx,
      vy: ball.vy,
      lastTouchEdge: ball.lastTouchEdge ?? state.lastTouchEdge ?? -1,
      chargedBy: ball.chargedBy ?? state.chargedBy ?? -1,
      age: ball.age ?? 1,
      hitCount: ball.hitCount ?? 0,
    })),
    chargedBy: state.chargedBy ?? -1,
    obstacles: Array.from(state.obstacles ?? []).map((obstacle: any) => ({
      id: obstacle.id,
      x: obstacle.x,
      y: obstacle.y,
      radius: obstacle.radius,
      sides: obstacle.sides,
      angle: obstacle.angle,
      spin: obstacle.spin,
      variant: obstacle.variant ?? 'post',
    })),
    seats: Array.from(state.seats).map((player: any) => ({
      id: player.id,
      name: player.name,
      edgeIndex: player.edgeIndex,
      paddle: player.paddle,
      paddleVelocity: 0,
      lives: player.lives,
      score: player.score,
      charge: Boolean(player.charge),
      ready: player.ready,
      connected: player.connected,
    })),
  };
}

function normalizeMatchOptions() {
  const options = normalizeMatchOptionValues(gameModeInput.value, matchTimeInput.value, livesInput.value);
  matchTimeInput.value = String(options.matchTimeSeconds);
  livesInput.value = String(options.lives);
  return options;
}

function syncMatchOptionUI() {
  const mode = gameModeInput.value === 'elimination' ? 'elimination' : 'score';
  livesField.classList.toggle('hidden', mode !== 'elimination');
  matchTimeInput.querySelector<HTMLOptionElement>('option[value="0"]')!.disabled = mode === 'score';
  normalizeMatchOptions();
}

function applyI18n() {
  document.documentElement.lang = settings.language;
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n as TranslationKey;
    element.textContent = t(key);
  });
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder as TranslationKey;
    element.placeholder = t(key);
  });
  languageInput.value = settings.language;
  musicVolumeInput.value = String(settings.musicVolume);
  sfxVolumeInput.value = String(settings.sfxVolume);
  musicVolumeValue.textContent = `${settings.musicVolume}%`;
  sfxVolumeValue.textContent = `${settings.sfxVolume}%`;
  if (!room && !offlineMode) {
    statusText.textContent = t('disconnected');
  }
  syncUI();
}

function showMenuView(view: MenuView) {
  shell.classList.add('menu-open');
  menuLayer.classList.remove('hidden');
  centerPanel.classList.add('hidden');
  lobbyFlow = null;
  menuLayer.querySelectorAll<HTMLElement>('[data-menu-view]').forEach((panel) => {
    panel.hidden = panel.dataset.menuView !== view;
  });
}

async function showMainMenu() {
  setPaused(false);
  gameExitButton.hidden = true;
  offlineMode = false;
  await leaveRoom();
  if (arcadeSession) {
    returnToArcade(arcadeSession);
    return;
  }
  snapshot = resetSnapshotToLobby(snapshot, t('disconnected'));
  snapshot.ball = { x: 0, y: 0, vx: 0, vy: 0 };
  snapshot.balls = [];
  ballGroup.clear();
  obstacleGroup.clear();
  roomCode.textContent = '----';
  joinInput.value = '';
  readyButton.disabled = true;
  showMenuView('main');
  syncUI();
}

function showLobby(flow: Exclude<LobbyFlow, null>) {
  lobbyFlow = flow;
  gameExitButton.hidden = false;
  menuLayer.classList.add('hidden');
  centerPanel.dataset.flow = flow;
  centerPanel.classList.remove('hidden');
  lobbyTitle.textContent = flow === 'single' ? t('singlePlayerTitle') : t('multiPlayerTitle');
  roomCode.textContent = flow === 'single' ? 'SOLO' : '----';
  readyButton.disabled = flow === 'multi' && !room;
  syncUI();
}

async function createRoom() {
  offlineMode = false;
  await leaveRoom();
  showLobby('multi');
  const sides = clamp(Number(sidesInput.value), MIN_PLAYERS, MAX_PLAYERS);
  const options = normalizeMatchOptions();
  room = await client.create('polygon_pong', {
    sides,
    name: nameInput.value,
    ...options,
    ...(arcadeSession ? arcadeJoinOptions(arcadeSession, options) : {}),
  });
  attachRoom(room);
}

async function joinRoom() {
  const code = joinInput.value.trim().toUpperCase();
  if (!code) return;
  offlineMode = false;
  await leaveRoom();
  showLobby('multi');
  room = await client.joinById(code, {
    name: nameInput.value,
    ...(arcadeSession ? arcadeJoinOptions(arcadeSession) : {}),
  });
  attachRoom(room);
}

async function leaveRoom() {
  if (room) {
    await room.leave();
    room = null;
  }
}

async function startOffline() {
  await leaveRoom();
  showLobby('single');
  const sides = clamp(Number(sidesInput.value), MIN_PLAYERS, MAX_PLAYERS);
  const options = normalizeMatchOptions();
  offlineMode = true;
  mySessionId = 'offline-human';
  localPaddle = 0.5;
  localPaddleTarget = 0.5;
  localPaddleVelocity = 0;
  setPaused(false);
  fixedAccumulator = 0;
  obstacleTimer = 0;
  obstacleLifetime = 0;
  ballSpawnTimer = 0;
  offlineMatchElapsed = 0;
  ballSetId = 0;
  ballGroup.clear();
  roomCode.textContent = t('botName');
  joinInput.value = '';
  readyButton.disabled = false;
  readyButton.textContent = t('restart');
  snapshot = makeOfflineSnapshot(sides, options);
  reportedResultSignature = '';
  rebuildArenaIfNeeded();
  fitCamera();
  syncUI();
}

async function launchFromArcade() {
  arcadeSession = await loadArcadeSession();
  if (!arcadeSession) return;

  nameInput.value = arcadeSession.payload.user.displayName;
  if (arcadeSession.roomId) joinInput.value = arcadeSession.roomId;
  if (arcadeSession.sides) sidesInput.value = String(clamp(arcadeSession.sides, MIN_PLAYERS, MAX_PLAYERS));
  await reportArcadeTelemetry(arcadeSession, 'game.client_ready', {
    roomId: arcadeSession.roomId,
    returnUrl: arcadeSession.returnUrl,
    offline: arcadeSession.offline,
    sides: arcadeSession.sides,
  });
  if (arcadeSession.offline) {
    await startOffline();
    return;
  }
  showLobby('multi');

  try {
    if (!arcadeSession.roomId) {
      await createRoom();
      return;
    }
    room = await client.joinById(arcadeSession.roomId, arcadeJoinOptions(arcadeSession));
  } catch {
    const options = normalizeMatchOptions();
    room = await client.create('polygon_pong', {
      sides: clamp(Number(sidesInput.value), MIN_PLAYERS, MAX_PLAYERS),
      ...arcadeJoinOptions(arcadeSession, options),
    });
  }
  attachRoom(room);
}

function attachRoom(nextRoom: Room) {
  mySessionId = nextRoom.sessionId;
  roomCode.textContent = nextRoom.roomId;
  joinInput.value = nextRoom.roomId;
  readyButton.disabled = false;
  statusText.textContent = t('connected');
  nextRoom.onStateChange((state: any) => {
    snapshot = copyState(state);
    rebuildArenaIfNeeded();
    fitCamera();
    syncUI();
  });
  nextRoom.onLeave(() => {
    statusText.textContent = t('disconnected');
    readyButton.disabled = true;
  });
}

function rebuildArenaIfNeeded() {
  const nextArenaKey = `${snapshot.sides}:${playfieldSides(snapshot.sides)}`;
  if (paddleGroup.children.length !== snapshot.sides || currentArenaKey !== nextArenaKey) {
    rebuildArena(snapshot.sides);
  }
}

function syncUI() {
  const mine = snapshot.seats.find((player) => player.id === mySessionId);
  const nextScoreSignature = snapshot.seats.map((player) => `${player.id}:${player.score}:${player.lives}`).join('|');
  if (scoreSignature && nextScoreSignature !== scoreSignature) {
    scoreFlash = 1;
  }
  scoreSignature = nextScoreSignature;
  const isGameActive = snapshot.phase === 'playing' || snapshot.phase === 'countdown';
  shell.classList.toggle('game-active', isGameActive);
  shell.classList.toggle('menu-open', !isGameActive);
  pauseMenu.classList.toggle('hidden', !(offlineMode && paused && isGameActive));
  const showLobbyPanel = Boolean(lobbyFlow) && snapshot.phase !== 'playing' && snapshot.phase !== 'countdown';
  centerPanel.classList.toggle('hidden', !showLobbyPanel);
  const inWaitingRoom = Boolean(room) || offlineMode;
  setupPanel.classList.toggle('hidden', inWaitingRoom);
  waitingPanel.classList.toggle('hidden', !inWaitingRoom || snapshot.phase === 'results');
  resultsPanel.classList.toggle('hidden', snapshot.phase !== 'results');
  maybeReportArcadeOfflineResult();
  waitingRoomCode.textContent = roomCode.textContent || '----';
  readyButton.textContent = offlineMode ? t('restart') : mine?.ready ? t('waiting') : t('ready');
  statusText.textContent = `${snapshot.lastEvent}${snapshot.phase === 'countdown' ? ` ${Math.ceil(snapshot.countdown)}` : ''}`;
  modeText.textContent = snapshot.mode === 'score' ? 'SCORE' : offlineMode ? 'SIM' : room ? 'K.O.' : 'STANDBY';
  roundText.textContent = snapshot.matchTimeSeconds > 0 ? formatTime(snapshot.remainingTime) : `R-${String(snapshot.round).padStart(2, '0')}`;

  scoreStrip.innerHTML = snapshot.seats.map((player, index) => {
    const value = !player.connected
      ? '--'
      : snapshot.mode === 'score'
        ? String(player.score).padStart(2, '0')
        : `${player.lives}/${snapshot.livesPerPlayer}`;
    const ready = player.ready ? t('ready').toUpperCase() : t('open');
    const bars = Array.from({ length: snapshot.livesPerPlayer }, (_, lifeIndex) => (
      `<i class="${lifeIndex < player.lives && player.connected ? 'on' : ''}"></i>`
    )).join('');
    const state = snapshot.mode === 'score'
      ? `${t('last')} ${snapshot.lastTouchEdge === player.edgeIndex ? t('lastTouch') : ready}`
      : player.connected && player.lives <= 0 ? t('wall') : ready;
    return `
      <div class="score" style="--accent:#${colors[index].toString(16).padStart(6, '0')}">
        <span>${String(player.edgeIndex + 1).padStart(2, '0')} / ${player.name}</span>
        <strong>${value}</strong>
        <div class="integrity">${bars}</div>
        <em>${state}</em>
      </div>
    `;
  }).join('');
  waitingRoster.innerHTML = snapshot.seats.map((player, index) => `
    <div class="roster-row" style="--accent:#${colors[index].toString(16).padStart(6, '0')}">
      <span>${String(player.edgeIndex + 1).padStart(2, '0')}</span>
      <strong>${player.name}</strong>
      <em>${player.connected ? player.ready ? t('ready').toUpperCase() : t('open') : t('open')}</em>
    </div>
  `).join('');
  podiumList.innerHTML = rankedPlayers(snapshot).slice(0, 3).map((player, index) => `
    <div class="podium-row place-${index + 1}" style="--accent:#${colors[player.edgeIndex % colors.length].toString(16).padStart(6, '0')}">
      <span>#${index + 1}</span>
      <strong>${player.name}</strong>
      <em>${snapshot.mode === 'score' ? String(player.score).padStart(2, '0') : `${player.lives}/${snapshot.livesPerPlayer}`}</em>
    </div>
  `).join('');
}

function maybeReportArcadeOfflineResult() {
  if (!arcadeSession || !offlineMode || snapshot.phase !== 'results') return;
  const signature = snapshot.seats.map((player) => `${player.id}:${player.score}:${player.lives}`).join('|');
  if (!signature || signature === reportedResultSignature) return;
  reportedResultSignature = signature;
  reportArcadeResult(arcadeSession, snapshot).catch(showError);
}

function setPaused(nextPaused: boolean) {
  paused = nextPaused;
  pauseButton.textContent = paused ? '>' : 'II';
  pressedKeys.clear();
  syncUI();
}

function sendInput(force = false) {
  if (offlineMode) return;
  if (!room) return;
  const now = performance.now();
  if (!force && now - lastSend < 33) return;
  lastSend = now;
  room.send('input', { paddle: localPaddleTarget });
}

function setPaddleTarget(value: number, force = false) {
  localPaddleTarget = clamp(value, 0, 1);
  sendInput(force);
}

function setChargeShot() {
  if (offlineMode) {
    const mine = snapshot.seats.find((player) => player.id === mySessionId);
    if (mine && mine.lives > 0) {
      mine.charge = true;
    }
    return;
  }
  room?.send('input', { charge: true });
}

function setPaddleFromClientX(clientX: number) {
  const rect = touchRail.getBoundingClientRect();
  setPaddleTarget((clientX - rect.left) / rect.width);
}

function beginRelativeDrag(pointerId: number, clientX: number, source: HTMLElement) {
  activePointerId = pointerId;
  pointerStartX = clientX;
  paddleStart = localPaddleTarget;
  dragMoved = false;
  source.setPointerCapture(pointerId);
}

function updateRelativeDrag(clientX: number, width: number) {
  if (Math.abs(clientX - pointerStartX) > 4) {
    dragMoved = true;
  }
  const sensitivity = window.innerWidth < 720 ? 1.25 : 1.0;
  const delta = ((clientX - pointerStartX) / Math.max(1, width)) * sensitivity;
  setPaddleTarget(paddleStart + delta);
}

function endRelativeDrag(pointerId: number, source: HTMLElement) {
  if (activePointerId !== pointerId) return;
  activePointerId = null;
  if (source.hasPointerCapture(pointerId)) {
    source.releasePointerCapture(pointerId);
  }
}

touchRail.addEventListener('pointerdown', (event) => {
  beginRelativeDrag(event.pointerId, event.clientX, touchRail);
});
touchRail.addEventListener('pointermove', (event) => {
  if (activePointerId === event.pointerId) {
    updateRelativeDrag(event.clientX, touchRail.getBoundingClientRect().width);
  }
});
touchRail.addEventListener('click', (event) => {
  if (!dragMoved) {
    setPaddleFromClientX(event.clientX);
  }
});
touchRail.addEventListener('pointerup', (event) => endRelativeDrag(event.pointerId, touchRail));
touchRail.addEventListener('pointercancel', (event) => endRelativeDrag(event.pointerId, touchRail));
touchRail.addEventListener('lostpointercapture', () => {
  activePointerId = null;
});

canvas.addEventListener('pointerdown', (event) => {
  if (!centerPanel.classList.contains('hidden')) return;
  beginRelativeDrag(event.pointerId, event.clientX, canvas);
});
canvas.addEventListener('pointermove', (event) => {
  if (activePointerId === event.pointerId) {
    updateRelativeDrag(event.clientX, window.innerWidth * 0.72);
  }
});
canvas.addEventListener('pointerup', (event) => endRelativeDrag(event.pointerId, canvas));
canvas.addEventListener('pointercancel', (event) => endRelativeDrag(event.pointerId, canvas));
canvas.addEventListener('lostpointercapture', () => {
  activePointerId = null;
});

function keyboardDirection() {
  const left = pressedKeys.has('ArrowLeft') || pressedKeys.has('KeyA');
  const right = pressedKeys.has('ArrowRight') || pressedKeys.has('KeyD');
  return Number(right) - Number(left);
}

function isTypingTarget(target: EventTarget | null) {
  return target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement;
}

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape' && offlineMode && (snapshot.phase === 'playing' || snapshot.phase === 'countdown')) {
    event.preventDefault();
    setPaused(!paused);
    return;
  }

  if (!isTypingTarget(event.target) && ['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD'].includes(event.code)) {
    event.preventDefault();
    pressedKeys.add(event.code);
    const direction = keyboardDirection();
    if (direction !== 0) {
      setPaddleTarget(localPaddleTarget + direction * 0.045, true);
    }
  }
  if (event.code === 'Space' && !event.repeat) {
    event.preventDefault();
    setChargeShot();
  }
});

window.addEventListener('keyup', (event) => {
  if (['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD'].includes(event.code)) {
    pressedKeys.delete(event.code);
  }
});

singlePlayerButton.addEventListener('click', () => showLobby('single'));
multiPlayerButton.addEventListener('click', () => showLobby('multi'));
settingsButton.addEventListener('click', () => showMenuView('settings'));
aboutButton.addEventListener('click', () => showMenuView('about'));
exitButton.addEventListener('click', () => showMenuView('exit'));
backButtons.forEach((button) => button.addEventListener('click', () => showMenuView('main')));
menuBackButton.addEventListener('click', () => showMainMenu().catch(showError));

languageInput.addEventListener('change', () => {
  settings = { ...settings, language: languageInput.value === 'en' ? 'en' : 'es' };
  persistSettings(settings);
  applyI18n();
});
musicVolumeInput.addEventListener('input', () => {
  settings = { ...settings, musicVolume: clamp(Number(musicVolumeInput.value), 0, 100) };
  musicVolumeValue.textContent = `${settings.musicVolume}%`;
  persistSettings(settings);
});
sfxVolumeInput.addEventListener('input', () => {
  settings = { ...settings, sfxVolume: clamp(Number(sfxVolumeInput.value), 0, 100) };
  sfxVolumeValue.textContent = `${settings.sfxVolume}%`;
  persistSettings(settings);
});
gameModeInput.addEventListener('change', syncMatchOptionUI);
matchTimeInput.addEventListener('change', normalizeMatchOptions);
livesInput.addEventListener('change', normalizeMatchOptions);

createButton.addEventListener('click', () => createRoom().catch(showError));
joinButton.addEventListener('click', () => joinRoom().catch(showError));
offlineButton.addEventListener('click', () => startOffline().catch(showError));
readyButton.addEventListener('click', () => {
  if (offlineMode) {
    startOffline().catch(showError);
    return;
  }
  const mine = snapshot.seats.find((player) => player.id === mySessionId);
  room?.send('input', { ready: !mine?.ready });
});
pauseButton.addEventListener('click', () => {
  setPaused(!paused);
});
gameExitButton.addEventListener('click', () => showMainMenu().catch(showError));
resumeButton.addEventListener('click', () => setPaused(false));
pauseExitButton.addEventListener('click', () => showMainMenu().catch(showError));

function showError(error: unknown) {
  statusText.textContent = error instanceof Error ? error.message : t('errorConnection');
  if (arcadeSession) {
    reportArcadeTelemetry(arcadeSession, 'error.client', {
      message: statusText.textContent,
    }).catch(() => undefined);
  }
}

function makeOfflineSnapshot(
  sides: number,
  options: { mode: 'score' | 'elimination'; lives: number; matchTimeSeconds: number },
): PongSnapshot {
  const nextSnapshot: PongSnapshot = {
    sides,
    phase: 'countdown',
    lastEvent: t('offlineEvent'),
    round: 1,
    countdown: 0.9,
    remainingTime: options.matchTimeSeconds,
    matchTimeSeconds: options.matchTimeSeconds,
    livesPerPlayer: options.lives,
    lastTouchEdge: -1,
    mode: options.mode,
    ball: { x: 0, y: 0, vx: 0, vy: 0 },
    balls: [],
    chargedBy: -1,
    obstacles: [],
    seats: Array.from({ length: sides }, (_, index) => ({
      id: index === 0 ? 'offline-human' : `bot-${index}`,
      name: index === 0 ? nameInput.value.trim().slice(0, 16) || t('playerFallback') : `${t('botName')} ${index}`,
      edgeIndex: index,
      paddle: 0.5,
      paddleVelocity: 0,
      lives: options.lives,
      score: 0,
      charge: false,
      ready: true,
      connected: true,
    })),
  };
  const firstBall = randomBall(-1, sides);
  nextSnapshot.ball = { x: firstBall.x, y: firstBall.y, vx: firstBall.vx, vy: firstBall.vy };
  nextSnapshot.balls = [firstBall];
  ballSpawnTimer = 0;
  offlineMatchElapsed = 0;
  return nextSnapshot;
}

function randomBall(towardEdge = -1, playerCount = snapshot.sides || DEFAULT_PLAYER_COUNT): BallSnapshot {
  const edges = polygonEdges(playfieldSides(playerCount), playfieldRadius(playerCount, ARENA_RADIUS));
  const arenaEdge = towardEdge >= 0 ? arenaEdgeForPlayer(towardEdge, playerCount) : -1;
  const angleBase = arenaEdge >= 0
    ? Math.atan2(-edges[arenaEdge].inward.y, -edges[arenaEdge].inward.x)
    : playerCount === 2
      ? (Math.random() < 0.5 ? 0 : Math.PI)
      : Math.random() * Math.PI * 2;
  const angle = angleBase + (Math.random() - 0.5) * 0.65;
  const speed = BALL_SPEED + Math.min(snapshot.balls?.length ?? 0, ABSOLUTE_MAX_BALLS - 1) * 0.25;
  return {
    id: `local-ball-${ballSetId++}`,
    x: 0,
    y: 0,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    lastTouchEdge: -1,
    chargedBy: -1,
    age: 0,
    hitCount: 0,
  };
}

function accelerateBallAfterHit(ball: BallSnapshot, bonusSpeed = 0) {
  ball.hitCount += 1;
  const currentSpeed = Math.hypot(ball.vx, ball.vy) || BALL_SPEED;
  const targetSpeed = ballSpeedForHitCount(ball.hitCount) + bonusSpeed;
  ball.vx = (ball.vx / currentSpeed) * targetSpeed;
  ball.vy = (ball.vy / currentSpeed) * targetSpeed;
}

function updateOffline(deltaSeconds: number) {
  if (!offlineMode || snapshot.phase === 'lobby') return;

  if (snapshot.phase === 'countdown') {
    snapshot.countdown -= deltaSeconds;
    if (snapshot.countdown <= 0) {
      snapshot.phase = 'playing';
      snapshot.lastEvent = t('offlineEvent');
    }
    syncUI();
    return;
  }

  offlineMatchElapsed += deltaSeconds;
  updateBotPaddles(deltaSeconds);
  updateOfflineObstacles(deltaSeconds);
  if (snapshot.matchTimeSeconds > 0) {
    snapshot.remainingTime = Math.max(0, snapshot.remainingTime - deltaSeconds);
    if (snapshot.remainingTime <= 0) {
      finishOfflineByTime();
      syncUI();
      return;
    }
  }
  const activeBallLimit = activeBallLimitForMatch(snapshot.sides, offlineMatchElapsed);
  ballSpawnTimer += deltaSeconds;
  if (snapshot.balls.length < activeBallLimit && ballSpawnTimer >= BALL_SPAWN_INTERVAL) {
    snapshot.balls.push(randomBall());
    snapshot.lastEvent = 'Nueva esfera';
    ballSpawnTimer = 0;
  }

  for (let index = snapshot.balls.length - 1; index >= 0; index -= 1) {
    const ball = snapshot.balls[index];
    ball.age += deltaSeconds;
    ball.x += ball.vx * deltaSeconds;
    ball.y += ball.vy * deltaSeconds;
    resolveObstacleCollisions(ball);
    resolveOfflineCollisions(ball, index);
  }
  syncPrimaryBall();
  syncUI();
}

function updateOfflineObstacles(deltaSeconds: number) {
  snapshot.obstacles.forEach((obstacle) => {
    obstacle.angle += obstacle.spin * deltaSeconds;
  });

  if (obstacleLifetime > 0) {
    obstacleLifetime -= deltaSeconds;
    if (obstacleLifetime <= 0) {
      snapshot.obstacles = makeObstacleSet(snapshot.sides);
      obstacleLifetime = nextObstacleLifetime();
    }
    return;
  }

  obstacleTimer -= deltaSeconds;
  if (obstacleTimer <= 0) {
    snapshot.obstacles = makeObstacleSet(snapshot.sides);
    obstacleLifetime = nextObstacleLifetime();
    obstacleTimer = 0;
  }
}

function finishOfflineByTime() {
  const players = snapshot.seats.filter((player) => player.connected);
  const topScore = Math.max(...players.map((player) => player.score), 0);
  const winners = players.filter((player) => player.score === topScore);
  snapshot.phase = 'results';
  snapshot.obstacles = [];
  snapshot.chargedBy = -1;
  snapshot.ball = { x: 0, y: 0, vx: 0, vy: 0 };
  snapshot.balls = [];
  snapshot.lastEvent = winners.length === 1 ? `${winners[0].name} gana por tiempo` : 'Empate por tiempo';
}

function updateBotPaddles(deltaSeconds: number) {
  const edges = polygonEdges(playfieldSides(snapshot.sides), playfieldRadius(snapshot.sides, ARENA_RADIUS));

  snapshot.seats.forEach((player) => {
    if (player.id === mySessionId || (snapshot.mode === 'elimination' && player.lives <= 0)) return;
    const edge = edges[arenaEdgeForPlayer(player.edgeIndex, snapshot.sides)];
    const predictions = activeBalls()
      .map((ball) => ({
        ball,
        prediction: predictBallEdgeT(edge, { x: ball.x, y: ball.y }, { x: ball.vx, y: ball.vy }),
      }))
      .filter((candidate) => candidate.prediction);
    const threat = predictions.sort((a, b) => (a.prediction?.time ?? 99) - (b.prediction?.time ?? 99))[0];
    const prediction = threat?.prediction ?? null;
    const ball = threat?.ball ?? activeBalls()[0] ?? snapshot.ball;
    const phase = performance.now() * 0.001;
    const personality = 0.5 + ((player.edgeIndex * 37) % 5) * 0.08;
    const patrol = 0.5 + Math.sin(phase * (0.85 + personality) + player.edgeIndex * 2.1) * 0.26;
    const edgeVelocity = dot({ x: ball.vx, y: ball.vy }, edge.tangent);
    const attackBias = clamp(edgeVelocity / 12, -0.14, 0.14);
    const pressure = prediction ? clamp(1.25 - prediction.time, 0, 1) : 0;
    const mistake = Math.sin(phase * 3.1 + player.edgeIndex * 1.7) * (0.11 - pressure * 0.045);
    const target = prediction ? prediction.t + attackBias * pressure + mistake : patrol;
    const reaction = clamp(target, 0.08, 0.92);
    const maxStep = deltaSeconds * (0.56 + pressure * 1.28 + personality * 0.18);
    const previous = player.paddle;
    player.paddle += clamp(reaction - player.paddle, -maxStep, maxStep);
    player.paddleVelocity = (player.paddle - previous) / Math.max(deltaSeconds, 0.001);
  });
}

function predictBallEdgeT(edge: { a: Vec2; tangent: Vec2; inward: Vec2; length: number }, position: Vec2, velocity: Vec2) {
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

function resolveObstacleCollisions(ball: BallSnapshot) {
  for (const obstacle of snapshot.obstacles) {
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
    accelerateBallAfterHit(ball);
    ball.x = obstacle.x + normal.x * (hitDistance + 0.05);
    ball.y = obstacle.y + normal.y * (hitDistance + 0.05);
    ball.chargedBy = -1;
    snapshot.lastEvent = 'Obstaculo desvio';
    return;
  }
}

function resolveOfflineCollisions(ball: BallSnapshot, ballIndex: number) {
  const edges = polygonEdges(playfieldSides(snapshot.sides), playfieldRadius(snapshot.sides, ARENA_RADIUS));

  for (let index = 0; index < edges.length; index += 1) {
    const edge = edges[index];
    const fromA: Vec2 = { x: ball.x - edge.a.x, y: ball.y - edge.a.y };
    const inwardDistance = dot(fromA, edge.inward);
    if (inwardDistance > BALL_RADIUS) continue;

    const along = dot(fromA, edge.tangent);
    const t = along / edge.length;
    if (t < -0.02 || t > 1.02) continue;

    const playerIndex = arenaPlayerForEdge(index, snapshot.sides);
    const player = playerIndex >= 0 ? snapshot.seats[playerIndex] : undefined;
    const isWallEdge = !player;
    if (isWallEdge) {
      const velocity = reflect({ x: ball.vx, y: ball.vy }, edge.inward);
      ball.vx = velocity.x;
      ball.vy = velocity.y;
      accelerateBallAfterHit(ball);
      ball.x += edge.inward.x * (BALL_RADIUS - inwardDistance + 0.06);
      ball.y += edge.inward.y * (BALL_RADIUS - inwardDistance + 0.06);
      ball.chargedBy = -1;
      snapshot.lastEvent = `Muro ${index + 1} reboto`;
      return;
    }

    const paddleHalf = PADDLE_LENGTH / edge.length / 2;
    const visiblePaddle = player.id === mySessionId ? localPaddle : player.paddle;
    const eliminatedWall = snapshot.mode === 'elimination' && player.connected && player.lives <= 0;
    const insidePaddle = player.connected && player.lives > 0 && Math.abs(t - visiblePaddle) <= paddleHalf;

    if (insidePaddle || eliminatedWall) {
      const velocity = reflect({ x: ball.vx, y: ball.vy }, edge.inward);
      const influence = insidePaddle ? clamp((t - visiblePaddle) / paddleHalf, -1, 1) : 0;
      const edgeKick = Math.sign(influence) * Math.pow(Math.abs(influence), 0.72) * 3.7;
      const paddleVelocity = player.id === mySessionId ? localPaddleVelocity : player.paddleVelocity;
      const motionKick = insidePaddle ? -clamp(paddleVelocity, -3.2, 3.2) * 1.25 : 0;
      ball.vx = velocity.x + edge.tangent.x * (edgeKick + motionKick);
      ball.vy = velocity.y + edge.tangent.y * (edgeKick + motionKick);
      const chargedHit = insidePaddle && player.charge;
      accelerateBallAfterHit(ball, chargedHit ? 2.3 : 0);
      ball.x += edge.inward.x * (BALL_RADIUS - inwardDistance + 0.06);
      ball.y += edge.inward.y * (BALL_RADIUS - inwardDistance + 0.06);
      if (insidePaddle) {
        ball.lastTouchEdge = player.edgeIndex;
        ball.chargedBy = chargedHit ? player.edgeIndex : -1;
        snapshot.lastTouchEdge = player.edgeIndex;
        snapshot.chargedBy = ball.chargedBy;
        player.charge = false;
        snapshot.lastEvent = `${player.name} bloqueo`;
      } else {
        ball.chargedBy = -1;
        snapshot.lastEvent = `Muro ${player.edgeIndex + 1} reboto`;
      }
      return;
    }

    if (snapshot.mode === 'score') {
      const scorer = snapshot.seats[ball.lastTouchEdge];
      if (scorer && scorer.connected && scorer.edgeIndex !== player.edgeIndex) {
        scorer.score += 1;
        snapshot.lastEvent = `${scorer.name} anota`;
        scoreFlash = 1;
      } else {
        snapshot.lastEvent = `${player.name} fallo`;
      }
    } else {
      player.lives = Math.max(0, player.lives - 1);
      snapshot.lastEvent = player.lives === 0 ? `${player.name} eliminado` : `${player.name} perdio una vida`;
    }

    const alive = snapshot.mode === 'score'
      ? snapshot.seats.filter((candidate) => candidate.connected)
      : snapshot.seats.filter((candidate) => candidate.lives > 0);
    if (snapshot.mode === 'elimination' && alive.length <= 1) {
      snapshot.phase = 'results';
      snapshot.lastEvent = alive[0] ? `${alive[0].name} gana` : 'Ronda terminada';
      snapshot.balls = [];
    } else {
      snapshot.round += 1;
      snapshot.balls.splice(ballIndex, 1);
      if (snapshot.balls.length < activeBallLimitForMatch(snapshot.sides, offlineMatchElapsed)) {
        snapshot.balls.push(randomBall(player.edgeIndex));
        ballSpawnTimer = 0;
      }
    }

    syncPrimaryBall();
    return;
  }
}

function syncPrimaryBall() {
  const primary = snapshot.balls[0];
  if (!primary) {
    snapshot.ball = { x: 0, y: 0, vx: 0, vy: 0 };
    snapshot.lastTouchEdge = -1;
    snapshot.chargedBy = -1;
    return;
  }
  snapshot.ball = { x: primary.x, y: primary.y, vx: primary.vx, vy: primary.vy };
  snapshot.lastTouchEdge = primary.lastTouchEdge;
  snapshot.chargedBy = primary.chargedBy;
}

function updateVisuals(time: number) {
  const deltaSeconds = Math.min((time - lastFrame) / 1000, 0.1);
  lastFrame = time;
  const rotationTarget = targetWorldRotation();
  worldGroup.rotation.z += shortestAngleDelta(worldGroup.rotation.z, rotationTarget) * Math.min(1, deltaSeconds * 16);

  if (!paused) {
    const direction = keyboardDirection();
    if (direction !== 0) {
      setPaddleTarget(localPaddleTarget + direction * deltaSeconds * 1.85);
    }

    const previousPaddle = localPaddle;
    localPaddle += (localPaddleTarget - localPaddle) * Math.min(1, deltaSeconds * 18);
    localPaddleVelocity = (localPaddle - previousPaddle) / Math.max(deltaSeconds, 0.001);
    thumb.style.left = `${localPaddle * 100}%`;

    fixedAccumulator += deltaSeconds;
    while (fixedAccumulator >= FIXED_DT) {
      updateOffline(FIXED_DT);
      fixedAccumulator -= FIXED_DT;
    }

    scoreFlash = Math.max(0, scoreFlash - deltaSeconds * 2.8);
    scoreStrip.style.filter = scoreFlash > 0 ? `brightness(${1 + scoreFlash * 0.8}) saturate(${1 + scoreFlash * 0.5})` : '';
    syncBallVisuals(ballGroup, activeBalls(), colors, time);
    syncObstacleMeshes(obstacleGroup, snapshot.obstacles, time);

    const edges = polygonEdges(playfieldSides(snapshot.sides), playfieldRadius(snapshot.sides, ARENA_RADIUS));
    paddleGroup.children.forEach((child: THREE.Object3D) => {
      const mesh = child as THREE.Mesh;
      const playerIndex = mesh.userData.playerIndex as number;
      const edgeIndex = mesh.userData.edgeIndex as number;
      const edge = edges[edgeIndex];
      const player = snapshot.seats[playerIndex];
      const eliminatedWall = snapshot.mode === 'elimination' && Boolean(player?.connected) && (player?.lives ?? 0) <= 0;
      const t = eliminatedWall ? 0.5 : player?.connected && player.id === mySessionId ? localPaddle : player?.paddle ?? 0.5;
      const center = pointOnEdge(edge, t);
      mesh.position.set(
        center.x + edge.inward.x * (eliminatedWall ? 0.05 : 0.28),
        center.y + edge.inward.y * (eliminatedWall ? 0.05 : 0.28),
        0.45,
      );
      mesh.rotation.z = edge.angle;
      mesh.scale.x = eliminatedWall ? edge.length / PADDLE_LENGTH : 1;
      mesh.scale.y = eliminatedWall ? 0.32 : player?.connected ? 1 : 0.35;
      const material = mesh.material as THREE.MeshBasicMaterial;
      material.opacity = eliminatedWall ? 0.42 : 1;
    });
  }

  renderer.render(scene, camera);
  requestAnimationFrame(updateVisuals);
}

window.addEventListener('resize', fitCamera);
window.addEventListener('blur', () => {
  pressedKeys.clear();
  sendInput(true);
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) pressedKeys.clear();
  sendInput(true);
});

rebuildArena(DEFAULT_PLAYER_COUNT);
fitCamera();
applyI18n();
syncMatchOptionUI();
launchFromArcade().catch(showError);
requestAnimationFrame(updateVisuals);

(window as any).__THREE_GAME_DIAGNOSTICS__ = () => ({
  renderer: renderer.info.render,
  snapshot,
  connected: Boolean(room),
  mySessionId,
  localPaddle,
  localPaddleTarget,
  arcade: arcadeSession,
});
