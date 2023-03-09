<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Warning from './components/Warning.vue';
</script>

<template>
  <Warning />
  <Header />
  <RouterView />
</template>

<style scoped></style>
