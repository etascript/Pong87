# Arquitectura

## Objetivo

PONG 87 debe servir como base para una serie de minijuegos web multiplayer. La prioridad es mantener el motor de juego en TypeScript puro, con una UI que pueda migrar a Vue mas adelante sin reescribir la simulacion.

Loop jugable: mover el pad, defender la arista propia, usar golpes cargados y rebotes con efecto, sumar puntos o sobrevivir mientras obstaculos dinamicos cambian la trayectoria de hasta tres esferas.

## Decision De Stack

La base actual es:

- `Three.js`: render del tablero, pelota, pads y obstaculos.
- `Vue 3`: capa de UI para menus, lobby, HUD y controles.
- `TypeScript`: reglas, estado y helpers compartidos.
- `Vite`: dev server y build.
- `Colyseus`: rooms multiplayer y sincronizacion de estado.
- `JSONL`: auditoria local inicial.

No se migro a Angular porque es demasiado pesado para minijuegos. Vue se usa como capa de UI, manteniendo Three.js y la simulacion en modulos TS puros.

## Fronteras

### `client/src/main.ts`

Sigue siendo el bootstrap principal. Actualmente monta Vue y conserva:

- Creacion del DOM principal.
- Wiring de botones y eventos.
- Setup de Three.js.
- Loop render/update.
- Simulacion offline.
- Conexion Colyseus.

Debe reducirse en nuevas iteraciones, pero ya no contiene el template HTML principal, todos los tipos, settings, ranking ni render de obstaculos/bolas.

### `client/src/components`

Primera capa Vue. De momento mantiene IDs y clases existentes para que el wiring imperativo siga funcionando durante la migracion.

- `TopBar.vue`
- `MainMenu.vue`
- `LobbyPanel.vue`
- `TouchControls.vue`
- `App.vue`

### `client/src/game`

Logica del cliente que no depende de Three.js.

- `types.ts`: contratos del snapshot, jugadores, obstaculos, settings y opciones de match.
- `settings.ts`: carga/guardado de configuracion en `localStorage`.
- `match.ts`: normalizacion de opciones, formato de tiempo y ranking.

### `client/src/render`

Codigo que transforma estado del juego en meshes Three.js.

- `obstacles.ts`: crea, actualiza y dispone meshes de obstaculos.
- `balls.ts`: crea, actualiza y dispone meshes de esferas con aura, pulso de carga y trail.

### `shared`

Codigo usado por cliente y servidor.

- `constants.ts`: valores base.
- `geometry.ts`: vertices, aristas, normales, reflejos y helpers geometricos.
- `obstacles.ts`: generacion comun de obstaculos para que offline y online tengan el mismo comportamiento.

### `server/src/index.ts`

Servidor Colyseus. Autoridad del modo online:

- Creacion y union de salas.
- Relleno con IAs si faltan jugadores.
- Estado de partida.
- Colisiones y score online.
- Escritura del log de actividad.

## Obstaculos

Los obstaculos se generan desde puntos candidatos distribuidos:

- Centro.
- Cruz interior.
- Anillo medio.
- Anillo exterior.
- Diagonales extra para 6 a 8 jugadores.

La generacion aplica jitter controlado y separacion minima para evitar grupos demasiado juntos. En 8 jugadores el rango objetivo actual es de 12 a 15 obstaculos.

Tipos visuales:

- `barrier`: barra blanca neon.
- `bumper`: pieza amarilla de rebote.
- `post`: anillo cyan.

La colision sigue siendo circular y arcade. Esto mantiene control y predictibilidad para un Pong rapido.

## Esferas

La partida parte con una esfera activa. Durante la fase `playing`, si hay menos de tres esferas, aparece una nueva cada 10 segundos.

Reglas actuales:

- Velocidad base: `BALL_SPEED`.
- Maximo activo: `MAX_BALLS = 3`.
- Intervalo de spawn: `BALL_SPAWN_INTERVAL = 10`.
- Cada esfera mantiene su propio `lastTouchEdge` y `chargedBy`.
- Si una esfera marca en Score Rush, se consume esa esfera y el punto se asigna al ultimo jugador que la toco.
- En Eliminacion, cada esfera perdida descuenta vida al jugador correspondiente.
- Si no quedan esferas activas y la partida sigue, se genera una nueva inmediatamente.

Render:

- Nucleo esferico.
- Aura rotatoria.
- Trail en direccion opuesta al movimiento.
- Pulso mayor cuando la esfera esta cargada.
- Flash en el HUD cuando cambian puntos o vidas.

## Auditoria

La auditoria actual escribe JSONL en:

```text
server/logs/activity.jsonl
```

Eventos relevantes:

- Creacion de sala.
- Entrada/salida de jugadores.
- Inicio/fin de match.
- Generacion/refresco de obstaculos.
- Golpes contra obstaculos.
- Scores, vidas y eliminaciones.

JSONL es suficiente para prototipo porque es simple, append-only y facil de importar. Cuando el juego requiera dashboard, busqueda o historiales por usuario, conviene pasar a SQLite o Postgres.

## Plan De Modularizacion Siguiente

Orden recomendado:

1. Mover `syncUI` a estado reactivo Vue con un store simple.
2. Reemplazar `innerHTML` dinamico del HUD por props/computed en componentes.
3. Extraer `client/src/network/room.ts` con Colyseus client.
4. Extraer `client/src/game/offline.ts` con simulacion offline e IA.
5. Extraer `client/src/render/arena.ts` con arena, pads y camara.
6. Separar input desktop/mobile en `client/src/game/input.ts`.

## Pausa Offline

En modo offline, `Escape` alterna un overlay de pausa. El overlay vive en Vue (`PauseMenu.vue`), pero el estado todavia se controla desde `main.ts` mientras avanza la migracion:

- Continuar: reanuda la simulacion y limpia teclas presionadas.
- Salir: vuelve al menu principal.
- Blur/cambio de pestana: limpia teclas para evitar movimiento pegado.

## Reglas De Trabajo

- Mobile first.
- Mantener la simulacion compartida cuando offline y online usen la misma regla.
- No mezclar render, estado, input y red en el mismo modulo cuando una funcion crezca.
- Preferir cambios jugables pequenos y verificables.
- Compilar con `npm run build` despues de cada refactor relevante.
