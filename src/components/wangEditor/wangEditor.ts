export default class {
  editor: wangEditor
  constructor(el: string, callback: Function, config: { [key: string]: any }) {
    const WangEditor = wangEditor
    this.editor = new WangEditor(el)
    this.editor.config.height = config.height

    this.editor.config.onchange = callback

    this.editor.create()

    this.editor.txt.html(config.modelValue)
  }
}
