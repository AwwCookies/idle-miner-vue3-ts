// useStats.ts
import { reactive, computed, onMounted } from 'vue'

export interface stat {
  name: string,
  value: number,
}

type Stats = {
  general: {
    goldPerSecond: number;
    luck: number;
    treasureChestsFound: number;
    lifetimeGold: number;
  };
  [key: string]: any;
};

const stats: Stats = reactive({
  general: {
    goldPerSecond: 0,
    luck: 0,
    treasureChestsFound: 0,
    lifetimeGold: 0,
  }
});


export function useStats() {
  function addStat(statName: string, amount: number) {
    if (!stats[statName]) {
      stats[statName] = { name: statName, value: 0, }
      return
    }
    stats[statName].value += amount
  }

  function addNode(name: string, nodeStats: Object) {
    stats[name] = nodeStats
  }

  function updateStat(name: string, stat: string, value: number) {
      if (!stats[name]) {
          addNode(name, {})
      }
      stats[name][stat] = value
  }

  function getStat(category: string, name: string) {
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
  return {
    stats,
    addStat,
    updateStat,
    addNode,
    getStat
  }
}