// test.ts

import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/upload/image',
    method: 'post',
    timeout: 300,
    response: () => {
      return {
        code: 200,
        message: 'upload successful',
        result: {
          url: '/images/login.jpg',
        },
      }
    },
  },
] as MockMethod[]
