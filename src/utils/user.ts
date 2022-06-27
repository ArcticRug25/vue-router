import { CacheEnum } from '../../types/cacheEnum'
import storageStore from './storageStore'
import { store } from '.'
import userStore from '@/store/userStore'
import type { ILoginData } from '@/apis/userApi'
import { login } from '@/apis/userApi'
import router from '@/router'

export function logout() {
  storageStore.remove(CacheEnum.TOKEN_NAME)
  router.push('/')
  userStore().info = null
}

export async function login1(values: ILoginData) {
  const { result: { token } } = await login(values)
  store.set(CacheEnum.TOKEN_NAME, {
    token,
    // expire: ,
  })
  router.push({ name: 'home' })
}
