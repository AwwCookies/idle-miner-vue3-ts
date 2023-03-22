// useLogs.ts
import { ref } from 'vue'

const logs = ref<Array<string>>([])

export function useLogs() {
  function add(message: string) {
    logs.value.push(message);
  }

  function get(limit = 10): Array<string> {
    return logs.value.slice(Math.max(logs.value.length - limit, 0))
  }

  function getReverse(limit = 10): Array<string> {
    return logs.value.reverse().slice(Math.max(logs.value.length - limit, 0))
  }

  return {
    logs,
    add,
    get
  }
}