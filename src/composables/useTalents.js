// useTalents.js
import { ref } from 'vue';

const talentPoints = ref(0);
const learnedTalents = ref([]);

export function useTalents() {
  const talents = ref([
    { id: 1, name: 'Mining', description: 'Mine resources faster', cost: 1 },
    { id: 2, name: 'Fishing', description: 'Catch fish faster', cost: 2 },
    { id: 3, name: 'Gathering', description: 'Gather resources faster', cost: 3 },
    { id: 4, name: 'Combat', description: 'Deal more damage in combat', cost: 4 },
    { id: 5, name: 'Crafting', description: 'Craft items faster', cost: 5 },
  ]);

  function learnTalent(id) {
    const talent = talents.value.find((talent) => talent.id === id);

    if (talentPoints.value >= talent.cost && !learnedTalents.value.includes(talent.id)) {
      learnedTalents.value.push(talent.id);
      talentPoints.value -= talent.cost;
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
