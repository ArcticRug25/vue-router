// test.ts

import { Random } from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'successful',
        result: {
          name: 'vben',
          age: 18,
          avatar: '/avatar/1.jpg',
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'successful',
        result: {
          token: Random.string(10),
        },
      }
    },
  },
] as MockMethod[]
