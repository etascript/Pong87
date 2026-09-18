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
    <div id="topInviteActions" class="top-invite-actions hidden">
      <button id="topCopyInviteButton" class="invite-chip" type="button" data-i18n="copyInvite" aria-label="Copiar link">Copiar link</button>
      <button id="topShareInviteButton" class="icon-button invite-share" type="button" aria-label="Compartir sala">
        <i class="fa-solid fa-share-nodes" aria-hidden="true"></i>
      </button>
    </div>
    <button id="pauseButton" class="icon-button pause-toggle" type="button" aria-label="Pausa" data-paused="false" hidden>
      <i class="icon-pause fa-solid fa-pause" aria-hidden="true"></i>
      <i class="icon-play fa-solid fa-play" aria-hidden="true"></i>
    </button>
    <button id="gameExitButton" class="icon-button game-exit" type="button" aria-label="Salir al menu" hidden>
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
  </section>
</template>
