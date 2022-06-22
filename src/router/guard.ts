import type { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {
    console.log(router)
  }

  public run() {
    this.router.beforeEach((to, from) => {
      // 匹配到父子路由的信息会进行合并
      // 登录处理
      if (!this.isLogin(to))
        return { name: 'login' }
    })
  }

  private isLogin(route: RouteLocationNormalized) {
    return false
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
