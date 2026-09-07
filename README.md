# PONG 87

## Integracion Arcade Hub

PONG 87 sigue funcionando standalone desde su URL normal. Si se abre con `arcadeToken`, entra en modo integrado:

```text
http://127.0.0.1:5174/?arcadeToken=...&hubUrl=http://127.0.0.1:2580&room=P87-ABCDE&returnUrl=http://127.0.0.1:5180
```

En ese modo:

- Valida el token contra `POST /api/launch-token/validate`.
- Usa `payload.user.displayName` como nombre del jugador.
- Intenta unirse al `room` indicado.
- Si la sala Colyseus aun no existe, la crea usando el mismo ID del Hub.
- Reporta eventos y resultados online al Hub desde el servidor.
- Reporta resultados offline al Hub si la partida offline fue iniciada desde un token.
- Si viene `offline=1`, inicia single player con IAs usando la identidad del Hub.
- En online, al dar ready espera hasta 60 segundos antes de llenar cupos con IA.
- Si un jugador entra con partida en curso, reemplaza una IA disponible.

Variable opcional para el servidor:

```text
ARCADE_HUB_URL=http://127.0.0.1:2580
```

Archivos estandarizados para reutilizar en futuros juegos:

- `client/src/arcade.ts`: lee query params, valida token, arma opciones de join, reporta telemetria/resultados y vuelve al Hub.
- `server/src/arcade-hub.ts`: reporta telemetria/resultados desde el runtime servidor del juego.

El contrato formal esta en `../arcade-hub/docs/MINIGAME_PROTOCOL.md`.

Prototipo web multiplayer inspirado en Pong, pensado mobile first. La arena cambia segun la cantidad de participantes: 2 y 3 jugadores usan un cuadrado con aristas vacias como muros, y desde 4 hasta 8 jugadores la figura crece con la cantidad de jugadores.

## Stack

- Vite + TypeScript
- Vue 3 para componentes de UI
- Three.js para render del tablero
- Colyseus para multiplayer
- Log JSONL local para auditoria del servidor
- i18n propio para ES/EN

## Comandos

```bash
npm install
npm run dev
npm run build
```

El cliente corre en `http://127.0.0.1:5173/` y el servidor Colyseus en `ws://127.0.0.1:2567`.

## Modos

- `Single Player`: partida offline con IAs.
- `Multi Player`: sala online; si faltan jugadores, los puestos libres se rellenan con IAs al iniciar.
- `Score Rush`: gana quien tenga mas puntos al terminar el tiempo. Por defecto dura 2:30.
- `Eliminacion`: cada jugador tiene vidas configurables. Al eliminarse, su arista se vuelve muro rebotable.

## Controles

- Desktop: flechas izquierda/derecha o `A/D` para mover el pad.
- Desktop: `Space` carga un golpe mas rapido.
- Offline: `Escape` abre pausa con Continuar o Salir.
- Mobile: rail inferior tactil para mover el pad.
- El jugador local siempre se ve desde su propia arista inferior.
- La partida usa hasta 3 esferas activas; parte con una y aparecen nuevas cada 10 segundos hasta completar el maximo.

## Auditoria

El servidor escribe eventos en:

```text
server/logs/activity.jsonl
```

Cada linea es un JSON independiente. Esto facilita revisar partidas, importar registros a una DB mas adelante o crear herramientas de replay/debug.

## Estructura Actual

```text
client/src/main.ts              Bootstrap Vue, UI wiring y loop principal
client/src/App.vue              Shell visual de la app
client/src/components/          Componentes Vue de topbar, menu, lobby y touch controls
client/src/game/types.ts        Tipos del snapshot y opciones
client/src/game/settings.ts     Persistencia local de configuracion
client/src/game/match.ts        Reglas puras de opciones, tiempo y ranking
client/src/render/obstacles.ts  Meshes de obstaculos neon
client/src/render/balls.ts      Meshes, aura y trail de esferas
client/src/i18n.ts              Traducciones ES/EN
server/src/index.ts             Sala Colyseus y simulacion online
shared/constants.ts             Constantes compartidas
shared/geometry.ts              Geometria de arena y colisiones
shared/obstacles.ts             Generacion compartida de obstaculos
```

Ver detalles en [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
