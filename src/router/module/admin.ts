import type { RouteRecordRaw } from 'vue-router'

export default {
  name: 'admin',
  path: '/admin',
  component: () => import('@/layout/admin.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'admin.home',
      path: 'home',
      component: () => import('@/views/admin/home.vue'),
    },
  ],
} as RouteRecordRaw
