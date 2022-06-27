import { CacheEnum } from '../../types/cacheEnum'
import storageStore from './storageStore'

export function logout() {
  storageStore.remove(CacheEnum.TOKEN_NAME)
}
