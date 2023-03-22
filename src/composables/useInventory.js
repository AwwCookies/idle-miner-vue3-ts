// useInventory.js
import { ref, computed } from 'vue'

const inventory = ref([])
const filter = ref('')

export default function useInventory() {
  const total = computed(() => inventory.value.length)

  function add(item) {
    const existingItem = inventory.value.find((i) => i.name === item.name)
    if (existingItem) {
      existingItem.amount++
    } else {
      item.amount = 1
      inventory.value.push(item)
    }
  }

  function getItemCount(itemName) {
    const item = inventory.value.find((i) => i.name === itemName)
    if (!item) { return 0 }
    return item.amount
  }

  function remove(itemName) {
    const item = inventory.value.find((i) => i.name === itemName)
    if (!item) { return }
    if (item.amount > 0) {
      item.amount--
      return item.value
    }
    return 0
  }

  function removeMultiple(item, amount) {
    const index = inventory.value.indexOf(item)
    if (index > -1) {
      inventory.value.splice(index, amount)
    }
    return item.value * amount
  }

  function get() {
    console.warn(`Please use getInventory() or getFilteredInventory() instead of get()`)
    return inventory.value
  }

  /**
   * Returns an array of all items in the inventory that match the specified type, regardless of case.
   * @param {string} type - The type of item to filter by.
   * @returns {ItemObject[]} - An array of item objects that match the specified type.
   */
  function getAllOfType(type) {
    return inventory.value.filter((item) => item.type.toLowerCase() === type.toLowerCase())
  }

  /**
   * Returns the total number of items in the inventory that match the specified type, regardless of case.
   * @param {string} type - The type of item to filter by.
   * @returns {number} - The total number of items that match the specified type.
   */
  function getTotalOfType(type) {
    // Filter the inventory to get all items with a matching type
    const itemsOfType = inventory.value.filter((item) => item.type.toLowerCase() === type.toLowerCase())

    // Sum up the amount property of each item in the filtered array
    return itemsOfType.reduce((total, item) => total + item.amount, 0)
  }



  const getInventory = computed(() => {
    return inventory.value
  })

  const getFilteredInventory = computed(() => {
    if (!filter.value) { return inventory.value }
    return inventory.value.filter((item) => item.name.toLowerCase().includes(filter.value.toLowerCase()))
  })

  return {
    total,
    add,
    remove,
    get,
    getItemCount,
    filter,
    getFilteredInventory,
    getInventory,
    getAllOfType,
    getTotalOfType,
  }
}
