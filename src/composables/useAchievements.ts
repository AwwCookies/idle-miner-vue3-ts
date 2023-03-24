// useAchievements.ts

//TODO: find a way to save state to local storage

import { ref, computed, onMounted } from 'vue';
import { getAchivements, type Achievement } from '../data/achivements.js';
import useInventory from './useInventory';
import { useGold } from './useGold';
import { useStats } from './useStats';
import { useLogs } from './useLogs';
import { useTalents } from './useTalents';
import { useLocalStorage } from '@vueuse/core';

export interface AchievementStatus {
  name: string;
  description: string;
  completed: boolean;
}

const inventory = useInventory();
const gold = useGold();
const { stats } = useStats();
const logs = useLogs();
const talents = useTalents();
const achievements = getAchivements({ inventory, gold, stats, talents });

export function useAchievements() {
  const completedAchievements = ref<Array<Achievement>>([]);
  //TODO: this needs to store IDs of achivements instead of the whole object
  // const completedAchievements = useLocalStorage('completedAchievements', [] as Array<Achievement>)

  function updateAndCheckAchievements() {
    achievements.forEach(achievement => {
      try {
        if (!completedAchievements.value.includes(achievement) && achievement.check()) {
          completedAchievements.value.push(achievement);
        }
      } catch (e) {
        // console.log(e)
      }
    });
  }
  
  const getCompleted = computed(() => completedAchievements.value);

  const getAchievementsStatus = computed(() => {
    const status: Array<AchievementStatus> = [];
    achievements.forEach(achievement => {
      status.push({
        name: achievement.name,
        description: achievement.description,
        completed: completedAchievements.value.includes(achievement),
      });
    });
    return status;
  });

  const getAchievementsCompletedTotal = computed(() => completedAchievements.value.length);
  const getAchievementsTotal = computed(() => achievements.length);

  onMounted(() => {
    updateAndCheckAchievements();
    setInterval(() => {
      updateAndCheckAchievements();
    }, 1000);
  });

  return {
    achievements,
    getCompleted,
    getAchievementsStatus,
    getAchievementsCompletedTotal,
    getAchievementsTotal,
  };
}
