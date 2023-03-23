// useTalents.ts
import { ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';

export interface Talent {
  id: number;
  name: string;
  description: string;
  cost: number;
}

const talentPoints = useLocalStorage('talentPoints', 0)
const learnedTalents = useLocalStorage('learnedTalents', [] as Array<Talent>)
export function useTalents() {
  const talents = ref([
    { id: 1, name: 'Mining', description: 'Mine resources faster', cost: 1 },
    { id: 2, name: 'Fishing', description: 'Catch fish faster', cost: 2 },
    { id: 3, name: 'Gathering', description: 'Gather resources faster', cost: 3 },
    { id: 4, name: 'Combat', description: 'Deal more damage in combat', cost: 4 },
    { id: 5, name: 'Crafting', description: 'Craft items faster', cost: 5 },
  ]);

  function learnTalent(id: number) {
    const talent = talents.value.find((talent) => talent.id === id);
    if (!talent) {
      console.log(`Talent not found: ${id}`);
      return;
    }
    if (talentPoints.value >= talent.cost && !talents.value.find((talent) => talent.id === id)) {
      learnedTalents.value.push(talent);
      if (talentPoints.value) {
        talentPoints.value -= talent.cost;
      } else {
        talentPoints.value = 0;
      }
      console.log(`Learned talent: ${talent.name}`);
    }
  }

  function resetTalents() {
    learnedTalents.value = [];
    talentPoints.value = 0;
    console.log('Talents reset');
  }

  return {
    talentPoints,
    learnedTalents,
    talents,
    learnTalent,
    resetTalents,
  };
}
