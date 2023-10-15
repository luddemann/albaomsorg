import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/om-oss',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
