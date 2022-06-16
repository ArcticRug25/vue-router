import path from 'path'
import type { AliasOptions } from 'vite'

const alias = {
  '@': path.resolve(__dirname, '../src'),
} as AliasOptions

export default alias
