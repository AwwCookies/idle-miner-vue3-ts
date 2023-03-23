// useGold.ts
import { ref, computed, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const gold = useLocalStorage('gold', 0)

export function useGold() {
  const lastUpdated = ref<number>(Date.now())
  const timeElapsed = ref<number>(0)
  const goldPerSecond = ref<number>(0)

  function add(amount: number): void {
    if (amount > 0) {
      if (gold.value) {
        gold.value += amount
      } else {
        gold.value = amount
      }
    }
  }

  function remove(amount: number): void {
    if (amount > 0 && amount <= gold.value) {
      if (gold.value) {
        gold.value -= amount
      } else {
        gold.value = 0
      } 
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