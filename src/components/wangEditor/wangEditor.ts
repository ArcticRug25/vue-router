import wangEditor from 'wangeditor'

export default class {
  editor: wangEditor
  constructor(el: string, callback: Function, config: { [key: string]: any }) {
    const WangEditor = wangEditor
    this.editor = new WangEditor(el)
    Object.assign(this.editor.config, config)

    this.editor.config.onchange = callback
    this.editor.config.uploadImgHooks = this.uploadImage()
    this.editor.create()

    this.editor.txt.html(config.modelValue)
  }

  uploadImage() {
    return {
      customInsert: (insertImgFn: Function, result: any) => {
        insertImgFn(result.result.url)
      },
    }
  }
}
