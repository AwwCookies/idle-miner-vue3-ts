<!-- AchievementView.vue -->
<template>
  <div class="achievements">
      <template v-for="achievement in achievements.getCompleted">
        <Achievement :achievement="achievement" />
      </template>
  </div>
</template>

<script setup>
import { useAchievements } from '../composables/useAchievements'
import Achievement from '@/components/Achievement.vue'
const achievements = useAchievements()
</script>

<style scoped>
.achievements {
  width: 500px;
  min-height: 300px;
}
</style>