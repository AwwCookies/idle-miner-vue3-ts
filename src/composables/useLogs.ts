// useLogs.ts
import { ref } from 'vue'

const logs = ref<Array<String>>([])

export function useLogs() {
  function add(message: String) {
    logs.value.push(message);
  }

  function get(limit = 10): Array<String> {
    return logs.value.slice(Math.max(logs.value.length - limit, 0))
  }

  function getReverse(limit = 10): Array<String> {
    return logs.value.reverse().slice(Math.max(logs.value.length - limit, 0))
  }

  return {
    logs,
    add,
    get
  }
}