import type { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.globEager('../layout/*.vue')
const views = import.meta.globEager('../views/**/*.vue')
function getRoutes(): RouteRecordRaw[] {
  return Object.entries(layouts).reduce((routes, [file, module]) => {
    const route = getRouteByModule(file, module)
    route.children = getChildrenRoutes(route)
    routes.push(route)
    return routes
  }, [] as RouteRecordRaw[])
}

// 获取布局路由的子路由
function getChildrenRoutes(layoutRoutes: RouteRecordRaw): RouteRecordRaw[] {
  return Object.entries(views).reduce((childrenRoutes, [file, module]) => {
    if (file.includes(`../views/${layoutRoutes.name as string}`)) {
      const route = getRouteByModule(file, module)
      childrenRoutes.push(route)
    }
    return childrenRoutes
  }, [] as RouteRecordRaw[])
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  // const name = file.split('/').pop()?.split('.')[0]
  const name = file.replace(/.+layout\/|.+views\/|\.vue/gi, '')
  const route = {
    name: name.replace('/', '.'),
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw

  return Object.assign(route, module.default?.route)
}

export default getRoutes
