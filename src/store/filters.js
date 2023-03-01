import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFilterStore = defineStore('filters', () => {
  const skill = ref('');
  const muscle = ref('');
  const difficulty = ref('');
  const equipment = ref('');

  return { skill, muscle, difficulty, equipment };
});
