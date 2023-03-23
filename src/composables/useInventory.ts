// useInventory.ts
import { ref, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import type { Item } from '@/items/items'

export interface InventoryItem extends Item {
  amount: number
}

const inventory = useLocalStorage('inventory', [] as InventoryItem[])
const filter = useLocalStorage('inventoryFilter', '')

export default function useInventory() {
  const total: ComputedRef<number> = computed(() => inventory.value.length)

  function add(item: Item): void {
    const existingItem: InventoryItem | undefined = inventory.value.find((i) => i.name === item.name)
    if (existingItem) {
      existingItem.amount++
    } else {
      inventory.value.push({...item, amount: 1})
    }
  }

  function getItemCount(itemName: string): number {
    const item = inventory.value.find((i) => i.name === itemName)
    if (!item) { return 0 }
    return item.amount
  }

  function remove(itemName: string): number | void {
    const item = inventory.value.find((i) => i.name === itemName)
    if (!item) { return }
    if (item.amount > 0) {
      item.amount--
      return item.value
    }
    return 0
  }

  // function removeMultiple(item: Item, amount: number): number {
  //   const index = inventory.value.indexOf(item)
  //   if (index > -1) {
  //     inventory.value.splice(index, amount)
  //   }
  //   return item.value * amount
  // }

  function getAllOfType(type: string): InventoryItem[] {
    return inventory.value.filter((item) => item.type.toLowerCase() === type.toLowerCase())
  }

  function getTotalOfType(type: string): number {
    const itemsOfType = inventory.value.filter((item) => item.type.toLowerCase() === type.toLowerCase())
    return itemsOfType.reduce((total, item) => total + item.amount, 0)
  }

  const getInventory: ComputedRef<InventoryItem[]> = computed(() => {
    return inventory.value
  })

  const getFilteredInventory: ComputedRef<InventoryItem[]> = computed(() => {
    if (!filter.value) { return inventory.value }
    return inventory.value.filter((item) => item.name.toLowerCase().includes(filter.value.toLowerCase()))
  })

  return {
    total,
    add,
    remove,
    getItemCount,
    filter,
    getFilteredInventory,
    getInventory,
    getAllOfType,
    getTotalOfType,
  }
}