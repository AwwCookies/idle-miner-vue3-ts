<template>
  <div class="mini-buttons">
    <p class="mini-button" id="settings" @click="">⚙️</p>
    <p class="mini-button" id="achievements" @click="">🏆</p>
    <p class="mini-button" id="inventory" @click="">🎒</p>
    <p class="mini-button" id="shop" @click="">💳</p>
    <p class="mini-button" id="stats" @click="">📊</p>
  </div>
</template>

<style scoped>
.mini-buttons {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  /* padding: 24px; */
  z-index: 9999;
  cursor: pointer;
  font-size: 36px;
}

.mini-button {}

.mini-button:hover {
  transform: scale(1.2);
}
</style>