import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home'),
    },
    {
      path: '/dependencies',
      name: 'dependencies',
      component: () => import('@/pages/Dependencies'),
    },
  ],
})

export default router
