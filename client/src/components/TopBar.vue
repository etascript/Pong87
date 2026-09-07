<template>
  <section class="topbar">
    <div class="brand">
      <span class="mark"></span>
      <div>
        <small data-i18n="subtitle">NEON GRID / PONG-84</small>
        <strong data-i18n="title">PONG 87</strong>
        <span id="statusText" data-i18n="disconnected">Sin conexion</span>
      </div>
    </div>
    <div class="readout">
      <span id="modeText">STANDBY</span>
      <span id="roundText">R-01</span>
    </div>
    <button id="pauseButton" class="icon-button" type="button" aria-label="Pausa">II</button>
    <button id="gameExitButton" class="icon-button game-exit" type="button" aria-label="Exit game" hidden>X</button>
  </section>
</template>
