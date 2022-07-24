// test.ts

import { Random } from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/article',
    method: 'get',
    timeout: 300,
    response: () => {
      return {
        code: 200,
        message: 'successful',
        result: new Array(20).fill(null).map((article, index) => {
          return {
            id: index + 1,
            title: Random.ctitle(),
            content: Random.cparagraph(),
          }
        }),
      }
    },
  },
] as MockMethod[]
