import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vite'
import { setupMockPlugin } from './mock'

export function setupVitePlugins(isBuild: boolean, env: ViteEnv) {
  const vitePlugins: Plugin[] = [vue()]
  vitePlugins.push(setupMockPlugin(isBuild))
  return vitePlugins
}
