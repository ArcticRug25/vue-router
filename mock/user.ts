// test.ts

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
] as MockMethod[]
