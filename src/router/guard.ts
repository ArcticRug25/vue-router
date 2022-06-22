import type { Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {
    console.log(router)
  }

  public run() {
    this.router.beforeEach((to, from) => {

    })
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
