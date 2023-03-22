// useStats.js
import { reactive, computed, onMounted } from 'vue'

const stats = reactive({
    general: {
        goldPerSecond: 0,
        luck: 0,
        treasureChestsFound: 0,
        lifetimeGold: 0,
    }
})



export function useStats() {
    function addStat(stat, amount) {
        if (!stats[stat]) {
            stats[stat] = { name: stat, value: 0, }
            return
        }
        stats[stat].value += amount
    }

    function addNode(name, nodeStats) {
        stats[name] = nodeStats
    }

    function updateStat(name, stat, value) {
        if (!stats[name]) {
            addNode(name)
        }
        stats[name][stat] = value
    }

    function getStat(category , name) {
        if (!stats[category]) {
            console.warn(`Category ${category} does not exist`)
            return 0
        }
        const categoryStats = stats[category]
        if (categoryStats <= 0) {
            console.warn(`Stat ${name} does not exist`)
            return 0
        }
        return stats[category][name]

    }
    return { stats, addStat, updateStat, addNode, getStat }
}