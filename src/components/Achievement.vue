<!-- Achievement.Vue -->
<template>
    <div class="achievement">
        <h4>{{ achievement.name }}</h4>
        <p>{{ achievement.description }}</p>
        <p>{{ achievement.progress() }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    achievement: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.achievement {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
}
</style>