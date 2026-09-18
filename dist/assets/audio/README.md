# PONG87 audio assets

Drop custom audio files here. The game tries these files first and falls back to procedural Web Audio sounds when a file is missing or cannot decode.

Recommended format: `.webm` with Opus, mono for SFX, 44.1 kHz or 48 kHz.

## SFX

Place short one-shot sounds in `sfx/`:

- `ui-click.webm`
- `ready.webm`
- `charge.webm`
- `pad-hit.webm`
- `wall-hit.webm`
- `obstacle-hit.webm`
- `score-for.webm`
- `score-against.webm`
- `ball-spawn.webm`
- `start.webm`
- `pause.webm`

## Music

Place the background loop in `music/`:

- `neon-loop.webm`

Keep music loops around 30-90 seconds and around 64-96 kbps when possible.
