// useAchievement.js
import { reactive, computed, onMounted } from 'vue'
import { getAchivements } from '../data/achivements.js'

import useInventory from './useInventory';
import { useGold } from './useGold';
import { useStats } from './useStats';
import { useLogs } from './useLogs';

const inventory = useInventory()
const gold = useGold()
const { stats } = useStats()
const logs = useLogs()


export function useAchievements() {
  const achievements = getAchivements({ inventory, gold, stats, logs })

  const state = reactive({
    completedAchievements: [],
    getCompleted: computed(() => {
      return state.completedAchievements
    }),
    updateAndCheckAchievements: () => {
      achievements.forEach(achievement => {
        try {
          if (!state.completedAchievements.includes(achievement) && achievement.check()) {
            state.completedAchievements.push(achievement)
          }
        } catch (e) {
          // console.log(e)
        }
      })
    },
    getAchievementsStatus: computed(() => {
      const status = []
      achievements.forEach(achievement => {
        status.push({
          name: achievement.name,
          description: achievement.description,
          completed: state.completedAchievements.includes(achievement),
        })
      })
      return status
    }),
  })


  onMounted(() => {
    state.updateAndCheckAchievements()
    setInterval(() => {
      state.updateAndCheckAchievements()
    }, 1000)
  })

  return state
}
