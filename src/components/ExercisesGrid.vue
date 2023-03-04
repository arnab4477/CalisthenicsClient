<script setup>
import { storeToRefs } from 'pinia';
import { useMovementsStore } from '../store';
import Thumbnail from './Thumbnail.vue';

const { filteredMovements } = storeToRefs(useMovementsStore());
</script>

<template>
  <div class="list-container">
    <Thumbnail
      v-for="movement in filteredMovements"
      :key="movement.name"
      v-bind="movement"
    />
  </div>
</template>

<style scoped>
.list-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding: 20px;
}
@media (max-width: 550px) {
  .list-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
