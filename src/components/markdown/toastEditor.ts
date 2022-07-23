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
      height,
      initialValue,
    })
    this.imageHook()
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
