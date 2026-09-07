<template>
  <div id="menuLayer" class="menu-layer">
    <section class="menu-panel" data-menu-view="main">
      <div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div>
      <h1 data-i18n="mainMenuTitle">PONG 87</h1>
      <p data-i18n="mainMenuSubtitle">Arcade neon chileno para 1 a 8 jugadores</p>
      <div class="menu-buttons">
        <button id="singlePlayerButton" class="primary-menu" type="button" data-i18n="singlePlayer">Single Player</button>
        <button id="multiPlayerButton" type="button" data-i18n="multiPlayer">Multi Player</button>
        <button id="settingsButton" type="button" data-i18n="settings">Configuracion</button>
        <button id="aboutButton" type="button" data-i18n="about">About Me</button>
        <button id="exitButton" class="ghost" type="button" data-i18n="exit">Salir</button>
      </div>
    </section>

    <section class="menu-panel" data-menu-view="settings" hidden>
      <div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div>
      <h2 data-i18n="settingsTitle">Configuracion</h2>
      <div class="settings-stack">
        <label class="range-field">
          <span data-i18n="musicVolume">Musica</span>
          <output id="musicVolumeValue">70%</output>
          <input id="musicVolumeInput" type="range" min="0" max="100" step="1" />
        </label>
        <label class="range-field">
          <span data-i18n="sfxVolume">Efectos</span>
          <output id="sfxVolumeValue">80%</output>
          <input id="sfxVolumeInput" type="range" min="0" max="100" step="1" />
        </label>
        <label>
          <span data-i18n="language">Idioma</span>
          <select id="languageInput">
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </label>
      </div>
      <button class="back-button" type="button" data-i18n="back">Volver</button>
    </section>

    <section class="menu-panel" data-menu-view="about" hidden>
      <div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div>
      <h2 data-i18n="aboutTitle">About Me</h2>
      <p class="about-copy" data-i18n="aboutBody">Proyecto personal para crear minijuegos web mobile-first.</p>
      <button class="back-button" type="button" data-i18n="back">Volver</button>
    </section>

    <section class="menu-panel" data-menu-view="exit" hidden>
      <div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div>
      <h2 data-i18n="exitTitle">Salir</h2>
      <p class="about-copy" data-i18n="exitBody">En web no siempre se puede cerrar la pestana desde el juego.</p>
      <button class="back-button" type="button" data-i18n="back">Volver</button>
    </section>
  </div>
</template>
