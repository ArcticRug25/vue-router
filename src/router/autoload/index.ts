import type { RouteRecordRaw } from 'vue-router'
import getRoutes from './view'
import autoloadModuleRoutes from './module'
import { env } from '@/utils'

const routes: RouteRecordRaw[] = env.VITE_ROUTER_AUTOLOAD ? getRoutes() : autoloadModuleRoutes()

export default routes
