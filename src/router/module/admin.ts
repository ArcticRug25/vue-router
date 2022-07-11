import type { RouteRecordRaw } from 'vue-router'

export default {
  name: 'admin',
  path: '/admin',
  redirect: '/admin/home',
  component: () => import('@/layout/admin.vue'),
  meta: { title: 'dashboard', icon: 'fas fa-home', auth: true, show: true },
  children: [
    {
      name: 'admin.home',
      path: 'home',
      component: () => import('@/views/admin/home.vue'),
      meta: { title: '工作台', show: true },
    },
  ],
} as RouteRecordRaw
