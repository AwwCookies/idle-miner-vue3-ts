<template>
  <div>
    <ul>
      <li v-for="(cat, index) in Object.keys(stats)" :key="index">
        <h4>{{ cat }}</h4>
        <ul>
          <li v-for="(value, key) in stats[cat]" :key="key">{{ key }}: {{ value }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStats } from '../composables/useStats'
const { stats } = useStats()
</script>