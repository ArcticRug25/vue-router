import type { IconType } from '@icon-park/vue-next/es/all'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    show?: boolean
    title?: string
    icon?: IconType
    isClick?: boolean
    permission?: string
  }
}
