import type { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layout/editor.vue'),
  children: [
    { name: 'editor.base', path: 'base', component: () => import('@/views/editor/base.vue') },
    { name: 'editor.markdown', path: 'markdown', component: () => import('@/views/editor/markdown.vue') },
  ],
} as RouteRecordRaw
