import { uploadImage } from '@/apis/uploadApi'

interface BlobA extends Blob {
  name?: string
}

export default class {
  editor
  constructor(el: string, initialValue: string, public height: string) {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      toolbarItems: this.toolbar(),
      height,
      initialValue,
    })
    this.imageHook()
  }

  private toolbar() {
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
      }],
    ]
  }

  private fullScreen() {
    const button = document.createElement('button') as HTMLButtonElement
    button.innerHTML = '全屏'
    button.style.margin = '0'

    button.addEventListener('click', () => {
      this.editor.setHeight('100vh')
    })

    return button
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
