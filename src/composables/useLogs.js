// useLogs.js
import { ref } from 'vue'
const logs = ref([])

export function useLogs() {
    function add(message) {
        logs.value.push(message);
      }

    function get(limit = 10) {
        return logs.value.slice(Math.max(logs.value.length - limit, 0))
    }

    function getReverse(limit = 10) {
        return logs.value.reverse().slice(Math.max(logs.value.length - limit, 0))
    }

    return {
        logs,
        add,
        get
    }
}