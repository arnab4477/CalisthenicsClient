import { defineStore, storeToRefs } from 'pinia';
import { ref, computed } from 'vue';
import Exercises from '../Exercises';
import { useFilterStore } from './filters';
import { filterMovements } from '../utils';

export const useMovementsStore = defineStore('movements', () => {
  const movements = ref(JSON.parse(JSON.stringify(Exercises)));

  const filters = useFilterStore();
  const { skill, muscle, difficulty, equipment } = storeToRefs(filters);

  const filteredMovements = computed(() => {
    return filterMovements(
      movements.value,
      skill.value,
      muscle.value,
      difficulty.value,
      equipment.value
    );
  });

  return { filteredMovements };
});
