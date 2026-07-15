import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/dependencies',
      name: 'dependencies',
      component: () => import('@/pages/Dependencies.vue'),
    },
  ],
})

export default router
