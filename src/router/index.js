import { createRouter, createWebHistory } from 'vue-router';
import HomeLayout from '../layouts/HomeLayout.vue';
import AllMovements from '../layouts/AllMovements.vue';
import OneMovement from '../layouts/OneMovement.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout,
    },
    {
      path: '/movements',
      name: 'movements',
      component: AllMovements,
    },
    {
      path: '/movements/:movement',
      name: 'movement',
      component: OneMovement,
    },
  ],
});

export default router;
