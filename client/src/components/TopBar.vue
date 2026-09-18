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
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 16.1c-.76 0-1.44.3-1.96.77L8.91 12.7a3.2 3.2 0 0 0 0-1.39l7.05-4.12A2.96 2.96 0 1 0 15 5c0 .23.03.45.08.66L8.03 9.78a3 3 0 1 0 0 4.44l7.1 4.16c-.05.2-.08.41-.08.62A2.95 2.95 0 1 0 18 16.1Z" />
        </svg>
      </button>
    </div>
    <button id="pauseButton" class="icon-button pause-toggle" type="button" aria-label="Pausa" data-paused="false" hidden>
      <svg class="icon-pause" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
      </svg>
      <svg class="icon-play" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
    <button id="gameExitButton" class="icon-button game-exit" type="button" aria-label="Salir al menu" hidden>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6z" />
      </svg>
    </button>
  </section>
</template>
