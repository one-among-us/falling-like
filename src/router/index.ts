import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/qs/:id',
      name: 'Qs',
      component: () => import('../views/Qs.vue'),
      props: true
    },
    {
      path: '/fell-like',
      name: 'Alt-Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/fell-like/qs/:id',
      name: 'Alt-Qs',
      component: () => import('../views/Qs.vue'),
      props: true,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { selector: to.hash }
    return { top: 0 }
  },
})

export default router
