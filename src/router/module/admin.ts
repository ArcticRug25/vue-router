import type { RouteRecordRaw } from 'vue-router'

export default {
  name: 'admin',
  path: '/admin',
  component: () => import('@/layout/admin.vue'),
  children: [
    {
      name: 'admin.home',
      path: 'home',
      component: () => import('@/views/admin/home.vue'),
    },
  ],
} as RouteRecordRaw
