import { defaultLanguage } from '../i18n';
import { clamp } from '../../../shared/geometry';
import type { SettingsState } from './types';

export const SETTINGS_KEY = 'polygon-pong-settings';

export const defaultSettings: SettingsState = {
  language: defaultLanguage,
  musicVolume: 70,
  sfxVolume: 80,
};

export function loadSettings(storage: Storage = localStorage): SettingsState {
  try {
    const stored = JSON.parse(storage.getItem(SETTINGS_KEY) || '{}') as Partial<SettingsState>;
    return {
      language: stored.language === 'en' || stored.language === 'es' ? stored.language : defaultSettings.language,
      musicVolume: clamp(Number(stored.musicVolume ?? defaultSettings.musicVolume), 0, 100),
      sfxVolume: clamp(Number(stored.sfxVolume ?? defaultSettings.sfxVolume), 0, 100),
    };
  } catch {
    return { ...defaultSettings };
  }
}

export function saveSettings(settings: SettingsState, storage: Storage = localStorage) {
  storage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
