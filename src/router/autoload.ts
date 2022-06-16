import type { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.globEager('../layout/*.vue')

Object.entries(layouts).forEach(([file, module]) => {
  const route = getRouteByModule(file, module)
})

function getRouteByModule(file: string, module: { [key: string]: any }) {

}

const layoutRoutes = [] as RouteRecordRaw[]

export default layoutRoutes
