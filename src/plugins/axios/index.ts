import Axios from '@/plugins/axios/axios'

const http = new Axios({
  baseURL: '/api',
  timeout: 1000,
  headers: {},
})

export { http }
