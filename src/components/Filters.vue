<script setup>
import DropDownMenu from './DropDownMenu.vue';

const skills = {
  type: 'Skills',
  filterArr: [
    'Any',
    'basics',
    'strength',
    'hypertrophy',
    'balance',
    'bent arm strength',
    'straight arm strength',
    'static',
  ],
};

const muscles = {
  type: 'Muscles',
  filterArr: [
    'Any',
    'chest',
    'lats',
    'biceps',
    'triceps',
    'shoulders',
    'forearms',
    'legs',
  ],
};

const difficulty = {
  type: 'Difficulty',
  filterArr: ['Any', 'Beginner', 'Intermediate', 'Advanced'],
};

const equipments = {
  type: 'Equipments',
  filterArr: [
    'Any',
    'floor',
    'horizontal bar',
    'gymnastics rings',
    'parallel bars',
  ],
};
</script>

<template>
  <div>
    <DropDownMenu v-bind="skills" />
    <DropDownMenu v-bind="muscles" />
    <DropDownMenu v-bind="difficulty" />
    <DropDownMenu v-bind="equipments" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;

  width: 100%;
}

@media (max-width: 550px) {
  div {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
}
</style>
