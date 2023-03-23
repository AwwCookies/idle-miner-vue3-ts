<!-- AchievementView.vue -->
<template>
  <div class="achievements">
      <template v-for="achievement in getCompleted">
        <Achievement :achievement="achievement" />
      </template>
  </div>
</template>

<script setup lang="ts">
import { useAchievements } from '../composables/useAchievements'
import Achievement from '@/components/Achievement.vue'
const { getCompleted } = useAchievements()
</script>

<style scoped>
.achievements {
  width: 500px;
  min-height: 300px;
}
</style>