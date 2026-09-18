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
      <div class="about-profile">
        <img src="/assets/img/me.png" alt="Sebastian Cortes Perez" />
        <div class="about-intro">
          <h2 data-i18n="aboutTitle">About Me</h2>
          <strong data-i18n="aboutRole">Full Stack Dev desde Chile</strong>
          <p data-i18n="aboutBody">Analista Programador, estudiante de Ingenieria en Desarrollo de Software y constructor de plataformas web con mas de 5 anos de experiencia.</p>
        </div>
      </div>
      <div class="about-code">
        <span>const sebastian = {</span>
        <span data-i18n="aboutCodeRole">rol: "Desarrollador Full Stack",</span>
        <span data-i18n="aboutCodeFocus">focus: ["codigo limpio", "magia", "subir de nivel"],</span>
        <span data-i18n="aboutCodeMotto">motto: "si no lo se hoy, lo aprendo manana"</span>
        <span>};</span>
      </div>
      <div class="about-grid">
        <div>
          <h3 data-i18n="aboutNowTitle">Ahora</h3>
          <p data-i18n="aboutNowBody">Full Stack Dev en Yoy Simulators, integrando Laravel, Vue, APIs, HubSpot, BBDD, VPS, DNS y AWS S3 sin perder el ritmo arcade.</p>
        </div>
        <div>
          <h3 data-i18n="aboutPastTitle">Background</h3>
          <p data-i18n="aboutPastBody">Continuidad para LATAM Airlines Cargo en 7 paises, Oracle/SQL bajo SLA y una ruta previa entre ASP.NET, ERPs y consultoria.</p>
        </div>
      </div>
      <div class="about-chips" aria-label="Stack">
        <span>Laravel</span>
        <span>Vue.js</span>
        <span>Spring Boot</span>
        <span>Oracle Cloud</span>
        <span>SQL</span>
        <span>AWS S3</span>
      </div>
      <a class="about-contact" href="mailto:sebastiancortes.2202@gmail.com">sebastiancortes.2202@gmail.com</a>
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
