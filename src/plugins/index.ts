import type { App } from 'vue'
import { setupTailwincss } from './tailwindcss'

export function setupPlugins(app: App) {
  setupTailwincss()
}
