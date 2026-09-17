export type GameSound =
  | 'ui'
  | 'ready'
  | 'charge'
  | 'pad'
  | 'wall'
  | 'obstacle'
  | 'scoreFor'
  | 'scoreAgainst'
  | 'spawn'
  | 'start'
  | 'pause';

type AudioSettings = {
  musicVolume: number;
  sfxVolume: number;
};

type VoiceOptions = {
  type?: OscillatorType;
  frequency: number;
  endFrequency?: number;
  duration: number;
  volume: number;
  delay?: number;
};

export class GameAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private sfx: GainNode | null = null;
  private music: GainNode | null = null;
  private ambience: OscillatorNode | null = null;
  private ambienceGain: GainNode | null = null;
  private settings: AudioSettings;
  private lastPlayed = new Map<GameSound, number>();

  constructor(settings: AudioSettings) {
    this.settings = settings;
  }

  setSettings(settings: AudioSettings) {
    this.settings = settings;
    this.applyVolumes();
  }

  async unlock() {
    this.ensureContext();
    if (!this.ctx) return;
    if (this.ctx.state !== 'running') {
      await this.ctx.resume();
    }
    this.startAmbience();
  }

  play(sound: GameSound, intensity = 1) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    if (!this.canPlay(sound)) return;

    const amount = Math.max(0.35, Math.min(1.45, intensity));
    switch (sound) {
      case 'ui':
        this.tone({ frequency: 620, endFrequency: 820, duration: 0.055, volume: 0.1 });
        break;
      case 'ready':
        this.tone({ frequency: 440, endFrequency: 760, duration: 0.11, volume: 0.12 });
        this.tone({ frequency: 880, duration: 0.07, volume: 0.07, delay: 0.055 });
        break;
      case 'charge':
        this.tone({ type: 'sawtooth', frequency: 320, endFrequency: 1280, duration: 0.18, volume: 0.08 });
        this.noise(0.08, 0.05);
        break;
      case 'pad':
        this.tone({ type: 'square', frequency: 220 * amount, endFrequency: 520 * amount, duration: 0.09, volume: 0.14 });
        this.tone({ frequency: 980 * amount, duration: 0.045, volume: 0.06 });
        break;
      case 'wall':
        this.tone({ type: 'triangle', frequency: 340, endFrequency: 180, duration: 0.08, volume: 0.09 });
        this.noise(0.045, 0.04);
        break;
      case 'obstacle':
        this.tone({ type: 'sawtooth', frequency: 540, endFrequency: 260, duration: 0.13, volume: 0.13 });
        this.noise(0.11, 0.055);
        break;
      case 'scoreFor':
        this.tone({ frequency: 520, endFrequency: 880, duration: 0.13, volume: 0.14 });
        this.tone({ frequency: 1040, endFrequency: 1560, duration: 0.16, volume: 0.12, delay: 0.08 });
        this.noise(0.12, 0.035, 0.03);
        break;
      case 'scoreAgainst':
        this.tone({ type: 'sawtooth', frequency: 280, endFrequency: 92, duration: 0.24, volume: 0.16 });
        this.noise(0.18, 0.06);
        break;
      case 'spawn':
        this.tone({ frequency: 300, endFrequency: 980, duration: 0.2, volume: 0.09 });
        this.tone({ frequency: 1230, duration: 0.06, volume: 0.04, delay: 0.12 });
        break;
      case 'start':
        this.tone({ frequency: 180, endFrequency: 620, duration: 0.18, volume: 0.12 });
        this.tone({ frequency: 740, endFrequency: 1180, duration: 0.16, volume: 0.1, delay: 0.12 });
        break;
      case 'pause':
        this.tone({ type: 'triangle', frequency: 500, endFrequency: 250, duration: 0.09, volume: 0.08 });
        break;
    }
  }

  private ensureContext() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    this.ctx = new AudioContextClass();
    this.master = this.ctx.createGain();
    this.sfx = this.ctx.createGain();
    this.music = this.ctx.createGain();
    this.sfx.connect(this.master);
    this.music.connect(this.master);
    this.master.connect(this.ctx.destination);
    this.applyVolumes();
  }

  private applyVolumes() {
    if (!this.sfx || !this.music) return;
    this.sfx.gain.value = (this.settings.sfxVolume / 100) * 0.75;
    this.music.gain.value = (this.settings.musicVolume / 100) * 0.22;
  }

  private startAmbience() {
    if (!this.ctx || !this.music || this.ambience) return;
    this.ambience = this.ctx.createOscillator();
    this.ambienceGain = this.ctx.createGain();
    this.ambience.type = 'sine';
    this.ambience.frequency.value = 58;
    this.ambienceGain.gain.value = 0.22;
    this.ambience.connect(this.ambienceGain).connect(this.music);
    this.ambience.start();
  }

  private canPlay(sound: GameSound) {
    const now = performance.now();
    const cooldown = sound === 'pad' || sound === 'wall' ? 38 : sound === 'obstacle' ? 70 : 120;
    const last = this.lastPlayed.get(sound) ?? -Infinity;
    if (now - last < cooldown) return false;
    this.lastPlayed.set(sound, now);
    return true;
  }

  private tone(options: VoiceOptions) {
    if (!this.ctx || !this.sfx) return;
    const start = this.ctx.currentTime + (options.delay ?? 0);
    const oscillator = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    oscillator.type = options.type ?? 'sine';
    oscillator.frequency.setValueAtTime(options.frequency, start);
    if (options.endFrequency) {
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, options.endFrequency), start + options.duration);
    }
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(options.volume, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + options.duration);
    oscillator.connect(gain).connect(this.sfx);
    oscillator.start(start);
    oscillator.stop(start + options.duration + 0.02);
  }

  private noise(duration: number, volume: number, delay = 0) {
    if (!this.ctx || !this.sfx) return;
    const sampleCount = Math.max(1, Math.floor(this.ctx.sampleRate * duration));
    const buffer = this.ctx.createBuffer(1, sampleCount, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < sampleCount; index += 1) {
      data[index] = (Math.random() * 2 - 1) * (1 - index / sampleCount);
    }
    const source = this.ctx.createBufferSource();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    const start = this.ctx.currentTime + delay;
    source.buffer = buffer;
    filter.type = 'bandpass';
    filter.frequency.value = 1400;
    filter.Q.value = 0.8;
    gain.gain.setValueAtTime(volume, start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter).connect(gain).connect(this.sfx);
    source.start(start);
  }
}
