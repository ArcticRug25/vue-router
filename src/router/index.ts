import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import autoload from './autoload'
import guard from './guard'
import routes from './routes'
import userStore from '@/store/userStore'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
})

export async function setupRouter(app: App) {
  const userPinia = userStore()
  await userPinia.getUserInfo()

  autoload(router)
  guard(router)
  app.use(router)
}

export default router
