import { defineStore } from 'pinia'
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordNormalized } from 'vue-router'
import { useRouter } from 'vue-router'
import storageStore from '@/utils/storageStore'
import type { IMenu } from '#/menu'
import { CacheEnum } from '#/cacheEnum'

export const routerStore = defineStore('routerStore', {
  state: () => ({
    routes: [] as RouteRecordNormalized[],
    historyMenu: [] as IMenu[],
  }),
  actions: {
    init() {
      this.getRoutes()
      this.historyMenu = storageStore.get(CacheEnum.HISTORY_MENU) ?? []
    },
    removeHistoryMenu(menu: IMenu) {
      const index = this.historyMenu.indexOf(menu)
      this.historyMenu.splice(index, 1)
      storageStore.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta.isClick)
        return
      const menu: IMenu = {
        ...route.meta,
        name: route.name as string,
      }
      const isHas = this.historyMenu.some(menu => menu.name === route.name)
      if (!isHas)
        this.historyMenu.unshift(menu)
      if (this.historyMenu.length > 10)
        this.historyMenu.pop()

      storageStore.set(CacheEnum.HISTORY_MENU, this.historyMenu)
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
    setCurrentMenu(route: RouteLocationNormalizedLoaded) {
      this.routes.forEach((m) => {
        m.meta.isClick = false
        m.children.forEach((c) => {
          if (c.meta && c.name === route.name) {
            m.meta.isClick = true
            c.meta.isClick = true
          }
        })
      })
    },
  },
})
