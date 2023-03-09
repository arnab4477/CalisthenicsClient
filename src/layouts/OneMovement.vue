<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import Exercises from '../Exercises';
import ExerciseCard from '../components/ExerciseCard.vue';

const router = useRoute();
const movementToShow = ref({});
const { movement } = router.params;

onBeforeMount(() => {
  movementToShow.value = Exercises.find((m) => m.name === movement);
});
</script>

<template>
  <main>
    <ExerciseCard v-bind="movementToShow" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
