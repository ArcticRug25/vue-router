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
  }
}
