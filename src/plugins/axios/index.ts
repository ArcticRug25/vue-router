import Axios from '@/plugins/axios/axios'

const http = new Axios({
  baseURL: '/api',
  timeout: 6000,
  headers: {},
})

export { http }
