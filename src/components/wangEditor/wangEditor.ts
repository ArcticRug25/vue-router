export default class {
  constructor(el: string) {
    const WangEditor = wangEditor
    const editor = new WangEditor(el)
    editor.create()
  }
}
