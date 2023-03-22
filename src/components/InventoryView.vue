<!-- InventoryView.vue -->
<template>
  <div class="inventory">
    <h2>Inventory</h2>
    <input type="text" v-model="filter" />
    <ul>
      <li v-for="(item, index) in getFilteredInventory" :key="index">
        <img :src="$getImageFromIconCode(item.icon)" /> {{ item.name }}: {{ item.amount }}
        <button @click="sell(item.name)">Sell</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import useInventory from '../composables/useInventory';
const {filter, getFilteredInventory} = useInventory()
defineProps({
  sell: {
    type: Function,
    required: true,
  },
})

</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

img {
  padding: 0;
  margin: 0;
  width: 24px;
  height: 24px;
}
</style>