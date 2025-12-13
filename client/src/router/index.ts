import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bookKeeping',
      name: 'bookKeeping',
      component: () => import('../views/TransactionView.vue'),
    },
  ],
})

export default router
