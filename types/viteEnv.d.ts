interface ViteEnv {
  VITE_ROUTER_AUTOLOAD: boolean
  VITE_API_URL: string
}

interface ImportMetaEnv extends ViteEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace toastui {
  class Editor {
    constructor(options: any)
    getMarkdown: () => any
    getHTML: () => any
    on: (event: string, callback: Function) => void
    removeHook: (type: string) => void
    addHook: (type: string, handler: Function) => void
    setHeight: (height: string) => void
  }
}

declare class wangEditor {
  constructor(el: string)
  create: () => void
  config: { [key: string]: any }
}
