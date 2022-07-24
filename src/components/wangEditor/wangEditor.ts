export default class {
  editor: wangEditor
  constructor(el: string, config: { [key: string]: any }) {
    const WangEditor = wangEditor
    this.editor = new WangEditor(el)
    this.editor.config.height = config.height
    this.editor.create()
  }
}
