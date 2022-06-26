import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const routerStore = defineStore('routerStore', {
  state: () => ({
    routes: getRoutes(),
  }),
})

function getRoutes() {
  const router = useRouter()
  const routes = router
    .getRoutes()
    .filter(route => route.children.length && route.meta.show)
    .map((route) => {
      route.children = route.children.filter(childRoute => childRoute.meta?.show)
      return route
    })

  return routes
}
