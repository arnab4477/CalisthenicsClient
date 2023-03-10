<script setup>
import Filters from './Filters.vue';
import ExercisesGrid from './ExercisesGrid.vue';
</script>

<template>
  <div class="container">
    <h1 class="heading">Filter through the Movements</h1>
    <Filters class="filters" />
    <ExercisesGrid class="exercises" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 10px;

  background-color: rgba(225, 99, 167, 0.349);

  width: 1000px;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
}

.container::-webkit-scrollbar {
  width: 4px;
}
.container::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0);
  border-radius: 100vw;
}
.container::-webkit-scrollbar-track {
  background: rgb(179, 179, 179);
  border-radius: 100vw;
}

.heading {
  position: relative;
  right: 220px;
  font-size: 40px;
  font-weight: bold;
}

.exercises {
  position: relative;
  top: 75px;
  left: 28px;
}

@media (max-width: 550px) {
  .container {
    width: 375px;
  }

  .heading {
    font-size: 26px;
    right: 0px;
  }

  .exercises {
    left: 0px;
  }
}
</style>
