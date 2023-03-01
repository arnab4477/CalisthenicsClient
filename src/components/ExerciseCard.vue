<script setup>
const movement = defineProps({
  name: String,
  description: String,
  image: String,
  tutorials: Array,
  skilltype: Array,
});
//   name: 'Push Up',
//   description:
//     'Push up is a basic horizontal pushing movement that primarily works the chest and anterior delts. Push up is one of the most important base building exercises for Calisthenics',
//   image:
//     'https://www.researchgate.net/profile/Walter-Frontera/publication/233749968/figure/fig2/AS:667635939282950@1536188220402/A-gymnast-performing-the-Iron-Cross-which-is-executed-by-extending-both-arms-straight_Q640.jpg',
//   tutorials: [
//     'https://www.youtube.com/watch?v=8nbFV-BOEL8',
//     'https://www.fitstream.com/exercises/iron-cross-a50',
//   ],
//   skilltype: ['strength', 'static'],
//   muscles: ['biceps', 'shoulders'],
//   difficulty: 'Advanced',
//   equipments: ['gymnastics rings'],
// };

const youtubeID = movement.tutorials[0].split('=')[1];
const YTThumbnailURL = `https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`;
</script>

<template>
  <div class="container">
    <div class="image-container">
      <img class="main-image" :src="image" :alt="name" />
    </div>
    <div class="info">
      <h1>{{ movement.name }}</h1>
      <p>{{ movement.description }}</p>
    </div>
    <hr />
    <div class="tutorials">
      <h2>Learn {{ movement.name }}</h2>
      <div class="tutorial-links-wrapper">
        <a
          class="link-container"
          :href="movement.tutorials[0]"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube video tutorial for this exercise"
        >
          <img
            class="tutorial-image"
            :src="YTThumbnailURL"
            alt="thumbnail of the youtube video tutorial"
          /><img class="yt" src="/yt.svg" alt="youtube play button" />
        </a>
        <a
          class="link-container"
          :href="movement.tutorials[1]"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="website article tutorial for this exercise"
        >
          <img
            class="tutorial-image"
            src="https://www.pngfind.com/pngs/m/583-5837072_cutting-edge-articles-journals-icons-hd-png-download.png"
            alt="article icon"
          />
        </a>
      </div>
    </div>
    <div class="skills">
      <p class="skilltype" v-for="skill in movement.skilltype">
        {{ skill }}
      </p>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  border: 0.5px solid rgba(75, 75, 75, 0.846);
  border-radius: 20px;
  background-color: rgba(132, 255, 0, 0.235);
  box-shadow: 0 0 25px 2.5px rgba(84, 84, 84, 0.746);
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
.info {
  padding: 20px;
}
h1 {
  font-size: 44px;
  color: black;
  font-weight: bold;
}

p {
  font-size: 28px;
  color: rgba(0, 0, 0, 0.794);
}

hr {
  height: 0.5px;
  color: rgba(255, 255, 255, 0.283);
  width: 100%;
  margin: 15px;
}
h2 {
  font-size: 40px;
}

.tutorials {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.tutorial-links-wrapper {
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  padding: 8px;
}
.link-container {
  position: relative;
  width: 170px;
  height: 100px;
}

.tutorial-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 160px;
  height: auto;
  border-radius: 15px;
}

.yt {
  position: absolute;
  width: 45px;
  height: 45px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  transition: 0.075s;
}
.yt:hover {
  opacity: 1;
}

.skills {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 25px;
}

.skilltype {
  font-size: 14px;
}

@media (max-width: 550px) {
  .container {
    width: 360px;
  }
  h1 {
    font-size: 28px;
  }
  p {
    font-size: 20px;
  }
  h2 {
    font-size: 28px;
  }

  .link-container {
    width: 110px;
    height: 65px;
  }
  .tutorial-image {
    max-width: 100px;
  }
  .yt {
    width: 32px;
    height: 32px;
  }
}
</style>
