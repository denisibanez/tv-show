import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: () => import('@/components/core/layout/LayoutComponent.vue'),
      meta: { requiresAuth: true },

      children: [
        {
          path: '',
          component: () => import('@/views/home/HomeView.vue'),
          meta: { requiresAuth: true },
        },

        {
          path: 'detail/:id',
          component: () => import('@/views/detail/DetailView.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },

    {
      path: '/:catchAll(.*)*',
      component: () => import('@/views/notFound/NotFound.vue'),
      meta: { requiresAuth: true },
    },
  ],
});

export default router;
