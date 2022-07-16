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
  }
}
