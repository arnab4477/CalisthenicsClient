<script setup>
import { RouterLink } from 'vue-router';
import SearchBar from '../components/SearchBar.vue';
</script>

<template>
  <main>
    <section class="main-section">
      <h1 class="main-text">
        Transform Your Body with Calisthenics: Find Your Perfect Movement and
        Reach New Heights
      </h1>
      <RouterLink class="router-link" to="/movements">
        <button type="button">See all movements</button>
      </RouterLink>
    </section>
  </main>
  <section class="search-section">
    <div class="search-container">
      <h2>Search the Movements</h2>
      <SearchBar />
    </div>
  </section>
</template>

<style scoped>
.main-section {
  background-color: rgba(78, 126, 0, 0.683);
  background-image: url('main.jpg');
  background-size: cover;
  background-blend-mode: multiply;

  padding-bottom: 175px;
  padding-top: 100px;
  padding-left: 500px;
  padding-right: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.main-text {
  font-size: 44px;
  color: white;
}

button {
  width: 285px;
  height: 54px;
  background-color: rgb(37, 62, 0);
  border-radius: 15px;
  color: white;
  font-size: 24px;
  transition: 0.15s ease;
}
button:hover {
  cursor: pointer;
  background-color: rgb(42, 132, 0);
}

.router-link {
  text-decoration: none;
  list-style: none;
}

.search-section {
  background-image: url('larosa.jpg');
  background-size: cover;

  padding-bottom: 475px;
  padding-top: 15px;
}

.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  position: relative;
  font-size: 46px;
  font-weight: bold;
  top: 38px;
}

@media (max-width: 550px) {
  .main-section {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 75px;
    padding-bottom: 150px;
  }
  .main-text {
    position: relative;
    top: 120px;
    font-size: 36px;
  }

  button {
    position: relative;
    top: 105px;

    font-size: 22px;
    width: 235px;
    height: 46px;
  }

  .search-section {
    background-position: right -190px center;
  }

  h2 {
    font-size: 32px;
  }
}
</style>
