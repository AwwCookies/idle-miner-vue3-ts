<!-- LogsView.vue -->
<template>
  <div class="logs">
    <ul>
      <li v-for="(log, index) in logs.get()" :key="index">
        <span v-html="$replaceIcons(log)"></span>
      </li>
    </ul>
  </div>
</template>
  
<script setup>
import { useLogs } from '../composables/useLogs'
const logs = useLogs()

</script>
  
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
