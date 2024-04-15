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
  {
    path: '/tjenester',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
  },
  {
    path: '/partnere',
    name: 'partners',
    component: () => import('../views/PartnersView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHistory(),
  routes,
})

export default router
