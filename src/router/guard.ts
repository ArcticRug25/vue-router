import type { RouteLocationNormalized, Router } from 'vue-router'
import { CacheEnum } from './../../types/cacheEnum'
import { store } from '@/utils'
import userStore from '@/store/userStore'

class Guard {
  constructor(private router: Router, private token: string = '') {
  }

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    this.token = store.get(CacheEnum.TOKEN_NAME)?.token
    // 匹配到父子路由的信息会进行合并
    // 登录处理
    if (!this.isLogin(to))
      return { name: 'login' }

    if (!this.isGuest(to))
      return from

    await this.getUserInfo()
  }

  private getUserInfo() {
    if (this.token)
      return userStore().getUserInfo()
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
