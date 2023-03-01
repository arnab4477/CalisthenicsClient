<script setup>
import { ref } from 'vue';
const show = ref(true);
</script>

<template>
  <div v-if="show">
    <p>
      <strong>
        Important! This is only the proof of concept version and this website is
        not using any real API to fetch the data. The backend has not been
        deployed yet so I am using some dummy data for the exercises
      </strong>
    </p>
    <button @click="show = false" type="button">Close</button>
  </div>
</template>

<style scoped>
div {
  background-color: rgb(124, 124, 0);
  width: 100%;
  overflow-x: hidden;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  padding: 12px;
}
p {
  color: black;
  font-size: 20px;
}

button {
  width: max-content;
  border: 1px solid black;
  border-radius: 15px;
  font-size: 18px;
  padding: 10px;
  color: black;
  background-color: rgb(196, 196, 0);
  transition: 0.15s ease;
}

button:hover {
  cursor: pointer;
  background-color: rgb(180, 180, 0);
}

@media (max-width: 550px) {
  div {
    align-items: center;
    justify-content: space-around;
    height: 130px;
    padding: 10px;
  }
  p {
    font-size: 16px;
  }
  button {
    font-size: 14px;
    padding: 8px;
  }
}
</style>
