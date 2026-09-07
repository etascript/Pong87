<script setup lang="ts">
import TopBar from './components/TopBar.vue';
import MainMenu from './components/MainMenu.vue';
import LobbyPanel from './components/LobbyPanel.vue';
import PauseMenu from './components/PauseMenu.vue';
import TouchControls from './components/TouchControls.vue';
</script>

<template>
  <main class="shell">
    <div class="scanlines" aria-hidden="true"></div>
    <TopBar />

    <section class="game-wrap">
      <canvas id="gameCanvas"></canvas>
      <MainMenu />
      <LobbyPanel />
      <PauseMenu />
      <TouchControls />
    </section>

    <section id="scoreStrip" class="score-strip"></section>
  </main>
</template>
