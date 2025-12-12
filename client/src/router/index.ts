import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bookKeeping',
      name: 'bookKeeping',
      component: () => import('../components/pages/BookKeepingView/BookKeepingView.vue'),
    },
  ],
})

export default router
