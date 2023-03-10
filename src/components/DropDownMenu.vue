<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useFilterStore } from '../store';

const filters = defineProps({
  type: String,
  filterArr: Array,
});

const { skill, muscle, difficulty, equipment } = storeToRefs(useFilterStore());

const open = ref(false);
const selected = ref(filters.filterArr[0]);

function onSelect(e) {
  const val = e.target.innerText;

  // Determine which filter is being applied to and the chnage the state accordingly
  switch (filters.type) {
    case 'Skills':
      if (val === 'Any') {
        skill.value = '';
        break;
      } else {
        skill.value = val;
        break;
      }
    case 'Muscles':
      if (val === 'Any') {
        muscle.value = '';
        break;
      } else {
        muscle.value = val;
        break;
      }
    case 'Difficulty':
      if (val === 'Any') {
        difficulty.value = '';
        break;
      } else {
        difficulty.value = val;
        break;
      }
    case 'Equipments':
      if (val === 'Any') {
        equipment.value = '';
        break;
      } else {
        equipment.value = val;
        break;
      }
  }

  selected.value = val;
  open.value = false;
}
</script>

<template>
  <div class="container">
    <h3>{{ filters.type }}</h3>
    <div class="filter-title-container" @click="() => (open = !open)">
      <p class="filter-title">{{ selected }}</p>
    </div>
    <ul v-if="open" @click="onSelect">
      <li v-for="filter in filters.filterArr">
        {{ filter }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
}

h3 {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.421);
}

.filter-title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  width: 100%;
  height: 40px;
  padding: 5px;
}
.filter-title-container:hover {
  cursor: pointer;
}

.filter-title {
  font-size: 20px;
  font-style: bold;
}

ul {
  display: flex;
  flex-direction: column;

  position: relative;
  right: 22px;
  bottom: 10px;

  width: 100%;
  max-height: 125px;
  overflow-x: hidden;
  overflow-y: scroll;
}

ul::-webkit-scrollbar {
  width: 4px;
}
ul::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0);
  border-radius: 100vw;
}
ul::-webkit-scrollbar-track {
  background: white;
  border-radius: 100vw;
}

li {
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 24px;
  padding: 4px;

  font-size: 18px;
  background-color: white;
  color: black;
}

li:hover {
  background-color: rgba(110, 206, 0, 0.611);
  cursor: pointer;
}

@media (max-width: 550px) {
  .container {
    width: 160px;
  }
  .filter-title-container {
    height: 50px;
  }
  .filter-title {
    font-size: 18px;
  }

  li {
    height: 35px;
    font-size: 18px;
  }
}
</style>
