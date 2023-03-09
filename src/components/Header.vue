<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <RouterLink to="/" class="router-link">Home</RouterLink>
    <RouterLink to="/movements" class="router-link">Movements</RouterLink>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
  background-color: darkgreen;
}

.router-link {
  text-decoration: none;
  list-style: none;

  color: white;
  padding: 10px;
  font-size: 26px;
  border-radius: 15px;

  transition: 0.15s;
}

.router-link:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.376);
}
</style>
