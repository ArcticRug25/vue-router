export default class {
  editor
  constructor(el: string, public height: string, initialValue: string) {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height,
      initialValue,
    })
  }
}
