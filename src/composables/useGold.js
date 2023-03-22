// useGold.js
import { ref, computed, onMounted } from 'vue'

const gold = ref(0)

export function useGold() {
  const lastUpdated = ref(Date.now())
  const timeElapsed = ref(0)
  const goldPerSecond = ref(0)

  function add(amount) {
    if (amount > 0) {
      gold.value += amount
    }
  }

  function remove(amount) {
    if (amount > 0 && amount <= gold.value) {
      gold.value -= amount
    }
  }

  function get() {
    return gold.value
  }

  function hasEnough(amount) {
    return amount <= gold.value
  }

  return {
    gold,
    add,
    remove,
    get,
    hasEnough,
    goldPerSecond,
  }
}
