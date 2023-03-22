<!-- DebugView.vue -->
<template>
    <div class="debug">
        <div>
            <button @click="stats.goldPerSecond++">Add 1 GPS</button>
            <button @click="gold.add(100)">Add 100 Gold</button>
            <button @click="gold.remove(100)">remove 100 Gold</button>
            <button @click="mine()">Mine</button>
            <button @click="showModal = !showModal">Show Modal</button>
        </div>
        <div>
            <input type="text" v-model="spawnItemInput" />
            <input type="number" v-model="spawnAmount" />
            <button @click="spawnItem()">Spawn Item</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import {useGold} from '../composables/useGold';
import {useStats} from '../composables/useStats';
import useInventory from '../composables/useInventory';
import {useAchievements} from '../composables/useAchievements';
import {useLogs} from '../composables/useLogs';
import useMining from '../composables/useMining';
import { getItemByName } from '@/items/items';

const settings = ref({})
const shop = ref({})
const gold = useGold()
const logs = useLogs()
const stats = useStats()
const spawnItemInput = ref('')
const spawnAmount = ref(1)
const inventory = useInventory()

const spawnItem = () => {
    console.log(spawnItemInput.value)
    const item = getItemByName(spawnItemInput.value)
    if (item) {
        inventory.add(item)
    }
}
// const talents = useTalents(stats)
const achievements = useAchievements()

</script>