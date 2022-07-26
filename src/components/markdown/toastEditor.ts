import Editor from '@toast-ui/editor'
import type { ToolbarItemOptions } from '@toast-ui/editor/types/ui'
import { uploadImage } from '@/apis/uploadApi'

interface BlobA extends Blob {
  name?: string
}

export default class {
  editor: Editor
  isFullscreen: Boolean = false
  constructor(el: string, initialValue: string, public height: string) {
    this.editor = new Editor({
      el: document.querySelector(el) as HTMLDivElement,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      toolbarItems: this.toolbar(),
      height,
      initialValue,
    })
    this.imageHook()
  }

  private toolbar(): (string | ToolbarItemOptions)[][] {
    return [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      // Using Option: Customize the last button
      [{
        el: this.fullScreen(),
        command: 'fullScreen',
        tooltip: 'FullScreen',
        name: 'fullScreen',
      }],
    ]
  }

  private fullScreen() {
    const button = document.createElement('button') as HTMLButtonElement
    button.innerHTML = '全屏'
    button.style.margin = '0'

    button.addEventListener('click', () => {
      this.toggleFullscreen()
    })

    document.documentElement.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && this.isFullscreen)
        this.toggleFullscreen()
    })

    return button
  }

  private toggleFullscreen() {
    const ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
    ui.classList.toggle('full-screen')
    this.isFullscreen = !this.isFullscreen

    if (!this.isFullscreen) {
      this.editor.setHeight(this.height)
      this.editor.focus()
    }
    else {
      this.editor.setHeight('100vh')
    }
  }

  private imageHook() {
    this.editor.removeHook('addImageBlobHook')

    this.editor.addHook('addImageBlobHook', async (blob: BlobA, cb: Function) => {
      const formData = new FormData()
      formData.append('file', blob, blob.name)

      const res = await uploadImage(formData)
      cb(res.result.url, blob.name)
    })
  }
}
