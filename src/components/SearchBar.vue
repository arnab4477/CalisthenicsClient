<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Exercises from '../Exercises';

const searchTerm = ref('');
const suggestionList = computed(() => {
  const filteredList = Exercises.filter((exercise) => {
    if (
      searchTerm.value !== '' &&
      exercise.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  if (filteredList.length !== 0) {
    return filteredList.map((exercise) => {
      return exercise.name;
    });
  } else return filteredList;
});
</script>
<template>
  <form>
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search for exercises eg: Iron Cross"
    />
    <ul class="suggestion-list-container" v-if="true">
      <li
        @click="searchTerm = suggestion"
        class="suggestion"
        v-for="suggestion in suggestionList"
        :key="suggestion"
      >
        {{ suggestion }}
      </li>
    </ul>
    <RouterLink class="router-link" :to="`/movements/${searchTerm}`">
      <button type="submit">Search</button>
    </RouterLink>
  </form>
</template>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  height: auto;
  padding: 25px;
}
input {
  background-color: white;
  color: black;
  width: 100%;
  height: 32px;
  font-size: 24px;
  border-radius: 25px;
  padding: 5px;
}
.suggestion-list-container {
  display: flex;
  flex-direction: column;

  position: relative;
  right: 22px;
  bottom: 15px;

  width: 100%;
  max-height: 125px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.suggestion-list-container::-webkit-scrollbar {
  width: 4px;
}
.suggestion-list-container::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0);
  border-radius: 100vw;
}
.suggestion-list-container::-webkit-scrollbar-track {
  background: white;
  border-radius: 100vw;
}

.suggestion {
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 24px;
  padding: 4px;

  font-size: 18px;
  color: black;
  background-color: white;

  border: 1px solid rgba(0, 0, 0, 0.739);
  border-radius: 20px;
}

.suggestion:hover {
  background-color: rgba(110, 206, 0, 0.611);
  cursor: pointer;
}
.router-link {
  text-decoration: none;
  list-style: none;
}

button {
  width: 105px;
  height: 32px;
  font-size: 20px;
  background-color: rgb(37, 62, 0);
  border-radius: 15px;
  color: white;
  transition: 0.15s ease;
}
button:hover {
  cursor: pointer;
  background-color: rgb(42, 132, 0);
}

@media (max-width: 550px) {
  form {
    width: 275px;
  }
  .suggestion {
    height: 24px;
    font-size: 22px;
  }
}
</style>
