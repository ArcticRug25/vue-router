import _ from 'lodash'
import type { App } from 'vue'
import { setupTailwincss } from './tailwindcss'

export function setupPlugins(app: App) {
  setupTailwincss()
  autoRegisterComponent(app)
}

// 自动注册全局组件
function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/form/*.vue')
  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift() as string
    app.component(_.camelCase(name), components[key].default)
  })
}
