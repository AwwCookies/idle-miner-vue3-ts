<template>
    <div v-show="isVisible" class="modal">
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const isVisible = ref(false)

  
  function show() {
    isVisible.value = true
  }
  
  function hide() {
    isVisible.value = false
  }
  
  function toggle() {
    isVisible.value = !isVisible.value
  }
  
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal__content {
    background-color: white;
    padding: 2rem;
  }
  </style>
  