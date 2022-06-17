import { http } from '@/plugins/axios'

export function info() {
  return http.request({
    url: 'info',
  })
}

export function login() {
  return http.request({
    url: 'info',
  })
}
