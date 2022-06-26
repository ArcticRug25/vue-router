import type { RouteLocationNormalized, Router } from 'vue-router'
import { store } from '@/utils'

class Guard {
  constructor(private router: Router, private token: string = '') {
  }

  public run() {
    this.router.beforeEach((to, from) => {
      debugger
      this.token = store.get('token')?.token
      // 匹配到父子路由的信息会进行合并
      // 登录处理
      if (!this.isLogin(to))
        return { name: 'login' }

      if (!this.isGuest(to))
        return from
    })
  }

  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.token))
  }

  private isLogin(route: RouteLocationNormalized): boolean {
    return Boolean(!route.meta.auth || (route.meta.auth && this.token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
