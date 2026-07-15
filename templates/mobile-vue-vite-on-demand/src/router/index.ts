import { createRouter, createWebHistory } from 'vue-router'
import Dependencies from '@/pages/Dependencies.vue'
import Home from '@/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/dependencies', component: Dependencies },
  ],
})

export default router
