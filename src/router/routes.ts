import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/login.vue'),
    meta: { guest: true },
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/article.vue'),
  },
  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/views/errors/404.vue'),
  },
]

export default routes
