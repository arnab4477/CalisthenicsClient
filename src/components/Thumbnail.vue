<script setup>
import { RouterLink } from 'vue-router';

const movement = defineProps({
  name: String,
  description: String,
  image: String,
  tutorials: Array,
  skilltype: Array,
});
</script>

<template>
  <RouterLink class="router-link" :to="`/movements/${movement.name}`">
    <div class="container">
      <div class="image-container">
        <img class="main-image" :src="image" :alt="name" />
      </div>
      <h1>{{ movement.name }}</h1>
      <hr />
    </div>
  </RouterLink>
</template>

<style scoped>
.router-link {
  text-decoration: none;
  list-style: none;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  border: 0.5px solid rgba(75, 75, 75, 0.846);
  border-radius: 20px;
  background-color: rgba(64, 255, 0, 0.195);
  box-shadow: 0 0 25px 2.5px rgba(84, 84, 84, 0.4);
  transition: 0.15s;
}
.container:hover {
  cursor: pointer;
  background-color: rgba(64, 255, 0, 0.402);
}
.image-container {
  width: 100%;
}
.main-image {
  /* This is not working for some reason */
  /* object-fit: cover; */
  max-width: 100%;
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

h1 {
  font-size: 28px;
  color: black;
  font-weight: bold;
}

hr {
  height: 0.5px;
  color: rgba(255, 255, 255, 0.283);
  width: 100%;
  margin: 15px;
}

@media (max-width: 550px) {
  .container {
    width: 340px;

    box-shadow: 0 0 15px 1px rgba(84, 84, 84, 0.4);
  }
  h1 {
    font-size: 32px;
  }
}
</style>
