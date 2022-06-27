import { defineStore } from 'pinia'
import type { User } from '@/apis/userApi'
import { info } from '@/apis/userApi'
import { to } from '@/utils'

export default defineStore('user', {
  state: () => {
    return {
      info: <User | null>{},
    }
  },
  actions: {
    async getUserInfo() {
      const [err, userInfoRes] = await to<ResponseResult<User>>(info())
      if (!err)
        this.info = userInfoRes.result
    },
  },
})
