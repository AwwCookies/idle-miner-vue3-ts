// useGold.ts
import { ref, computed, onMounted } from 'vue'

const gold = ref<number>(0)

export function useGold() {
  const lastUpdated = ref<number>(Date.now())
  const timeElapsed = ref<number>(0)
  const goldPerSecond = ref<number>(0)

  function add(amount: number): void {
    if (amount > 0) {
      gold.value += amount
    }
  }

  function remove(amount: number): void {
    if (amount > 0 && amount <= gold.value) {
      gold.value -= amount
    }
  }

  function get(): number {
    return gold.value
  }

  function hasEnough(amount: number): boolean {
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