<template>
  <div>
    <ul> <!-- first indent -->
      <li v-for="(cat, index) in Object.keys(stats)" :key="index">
        <h4>{{ cat }}</h4>
        <ul> <!-- second indent -->
          <li v-for="(value, key) in stats[cat]" :key="key">{{ key }}: {{ value }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStats } from '../composables/useStats'
const { stats } = useStats()
</script>