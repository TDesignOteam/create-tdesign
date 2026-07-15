import { createRouter, createWebHistory } from 'vue-router'
import Dependencies from '@/pages/Dependencies'
import Home from '@/pages/Home'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/dependencies', component: Dependencies },
  ],
})

export default router
