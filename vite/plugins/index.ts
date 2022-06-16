import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vite'

export function setupVitePlugins(isBuild: boolean, env: Record<string, any>) {
  const vitePlugins: Plugin[] = [vue()]
  return vitePlugins
}
