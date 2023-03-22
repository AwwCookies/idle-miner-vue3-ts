// useAchievement.js
import { reactive, computed, onMounted } from 'vue'
import { getAchivements, type Achievement } from '../data/achivements.js'

import useInventory from './useInventory';
import { useGold } from './useGold';
import { useStats } from './useStats';
import { useLogs } from './useLogs';
import { useTalents } from './useTalents';

const inventory = useInventory()
const gold = useGold()
const { stats } = useStats()
const logs = useLogs()
const talents = useTalents()

interface AchievementStatus {
  name: string,
  description: string,
  completed: boolean,
}

export function useAchievements() {
  const achievements = getAchivements({ inventory, gold, stats, talents })

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
      const status: Array<AchievementStatus> = []
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
