import { http } from '@/plugins/axios'

interface User {
  name: string
  age: number
  avatar: string
}

export function info() {
  return http.request<User>({
    url: 'info',
  })
}

interface LoginInterface {
  token: string
}

export function login() {
  return http.request<LoginInterface>({
    url: 'login',
  })
}
