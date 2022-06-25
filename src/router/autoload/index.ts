import type { RouteRecordRaw } from 'vue-router'
import getRoutes from './view'
import autoloadModuleRoutes from './module'
import { env } from '@/utils'

let routes = [] as RouteRecordRaw[]

if (env.VITE_ROUTER_AUTOLOAD)
  routes = getRoutes()
else
  routes = autoloadModuleRoutes()

export default routes
