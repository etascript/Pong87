<template>
  <div id="centerPanel" class="center-panel hidden" data-flow="multi">
    <div class="panel-header">
      <div>
        <span id="lobbyTitle" data-i18n="arcadeLink">ARCADE LINK</span>
        <small>CREA O UNETE A UNA SALA</small>
      </div>
      <strong id="roomCode">----</strong>
    </div>
    <div id="setupPanel" class="setup-panel">
      <div class="menu-tabs lobby-tabs" aria-hidden="true">
        <span class="active">CREAR SALA</span>
        <span>UNIRSE A SALA</span>
      </div>
      <div class="field-grid">
        <label>
          <i class="fa-solid fa-user" aria-hidden="true"></i>
          <span data-i18n="playerTag">Player tag</span>
          <input id="nameInput" maxlength="16" value="Jugador" />
        </label>
        <label>
          <i class="fa-solid fa-dice-d8" aria-hidden="true"></i>
          <span data-i18n="arena">Arena</span>
          <select id="sidesInput">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4" selected>4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </label>
        <label>
          <i class="fa-solid fa-sliders" aria-hidden="true"></i>
          <span data-i18n="mode">Modo</span>
          <select id="gameModeInput">
            <option value="score" data-i18n="scoreRush">Score Rush</option>
            <option value="elimination" data-i18n="elimination">Eliminacion</option>
          </select>
        </label>
        <label id="livesField">
          <i class="fa-solid fa-flag" aria-hidden="true"></i>
          <span data-i18n="lives">Vidas</span>
          <input id="livesInput" type="number" min="1" max="9" step="1" value="5" />
        </label>
        <label>
          <i class="fa-solid fa-clock" aria-hidden="true"></i>
          <span data-i18n="matchTime">Tiempo</span>
          <select id="matchTimeInput">
            <option value="0" data-i18n="noLimit">Sin limite</option>
            <option value="30">0:30</option>
            <option value="60">1:00</option>
            <option value="90">1:30</option>
            <option value="120">2:00</option>
            <option value="150" selected>2:30</option>
            <option value="180">3:00</option>
            <option value="240">4:00</option>
            <option value="300">5:00</option>
          </select>
        </label>
      </div>
      <div class="actions">
        <button id="createButton" type="button" data-i18n="host">Host</button>
        <input id="joinInput" maxlength="8" placeholder="CODIGO" data-i18n-placeholder="joinPlaceholder" />
        <button id="joinButton" type="button" data-i18n="link">Link</button>
      </div>
    </div>
    <div id="waitingPanel" class="waiting-panel hidden">
      <div class="lobby-code">
        <span>ROOM</span>
        <strong id="waitingRoomCode">----</strong>
      </div>
      <div id="invitePanel" class="invite-panel hidden">
        <input id="inviteLinkInput" readonly aria-label="Invite link" />
        <button id="copyInviteButton" type="button" data-i18n="copyInvite">Copiar link</button>
        <button id="shareInviteButton" type="button" data-i18n="shareInvite">Compartir</button>
      </div>
      <div id="waitingRoster" class="waiting-roster"></div>
    </div>
    <div id="resultsPanel" class="results-panel hidden">
      <div class="podium-title">RESULTS</div>
      <div id="podiumList" class="podium-list"></div>
    </div>
    <div class="boot-actions">
      <button id="offlineButton" class="offline" type="button" data-i18n="cpuJam">CPU Jam</button>
      <button id="forceStartButton" class="force-start hidden" type="button" data-i18n="fillWithBots">Completar con IA</button>
      <button id="readyButton" class="ready" type="button" disabled data-i18n="ready">Ready</button>
      <button id="finishMatchButton" class="finish-match hidden" type="button" data-i18n="finishMatch">Terminar partida</button>
      <button id="menuBackButton" class="ghost" type="button" data-i18n="mainMenu">Menu</button>
    </div>
  </div>
</template>
