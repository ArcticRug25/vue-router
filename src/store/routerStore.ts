import { defineStore } from 'pinia'
import type { RouteLocationNormalized, RouteRecordNormalized } from 'vue-router'
import { useRouter } from 'vue-router'
import type { IMenu } from '#/menu'

export const routerStore = defineStore('routerStore', {
  state: () => ({
    routes: [] as RouteRecordNormalized[],
    historyMenu: [] as IMenu[],
  }),
  actions: {
    addHistoryMenu(route: RouteLocationNormalized) {
      const menu: IMenu = {
        ...route.meta,
        name: route.name as string,
      }
      const isHas = this.historyMenu.some(menu => menu.name === route.name)
      if (!isHas)
        this.historyMenu.unshift(menu)
      if (this.historyMenu.length > 10)
        this.historyMenu.pop()
    },
    getRoutes() {
      const router = useRouter()
      const routes = router
        .getRoutes()
        .filter(route => route.children.length && route.meta.show)
        .map((route) => {
          route.children = route.children.filter(childRoute => childRoute.meta?.show)
          return route
        })
        .filter(route => route.children.length)
      this.routes = routes
    },
  },
})
