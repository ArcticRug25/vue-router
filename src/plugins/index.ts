import _ from 'lodash'
import type { App } from 'vue'
import setupElementPlus from './elementui'
import { setupTailwincss } from './tailwindcss'

export function setupPlugins(app: App) {
  autoRegisterComponent(app)
  setupTailwincss()
  setupElementPlus(app)
}

// 自动注册全局组件
function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/form/*.vue')
  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift() as string
    app.component(_.camelCase(name), components[key].default)
  })
}
