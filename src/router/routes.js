import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: () => import('@/views/home/HomeComponent.vue'),
      meta: { requiresAuth: true },
    },
  ],
});

export default router;
