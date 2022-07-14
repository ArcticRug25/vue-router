// test.ts

import { Random } from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user/info',
    method: 'get',
    timeout: 300,
    response: () => {
      return {
        code: 200,
        message: 'successful',
        result: {
          name: 'ArcticRug25',
          age: 18,
          avatar: '/images/login.jpg',
          permissions: ['editor_markdown', 'article_edit'],
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
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
