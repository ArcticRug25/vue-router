import type { ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
// import AutoImport from 'unplugin-auto-import/webpack'
// import Components from 'unplugin-vue-components/webpack'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
    devtool: 'source-map',
    plugins: [
      ...setupVitePlugins(isBuild, env),
      visualizer(),
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      //   imports: ['vue', 'vue-router'],
      //   dts: 'types/auto-imports.d.ts',
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      //   dirs: ['src/components'],
      //   directoryAsNamespace: true,
      //   dts: 'types/components.d.ts',
      // }),
    ],
    resolve: {
      alias,
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules'))
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
          },
        },
      },
    },
  }
}
