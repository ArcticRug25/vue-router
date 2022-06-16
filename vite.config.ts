import type { ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import { setupVitePlugins } from './vite/plugins'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,
//   },
// })

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  return {
    plugins: setupVitePlugins(isBuild, env),
    resolve: {
      alias,
    },
  }
}
