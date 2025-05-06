class YiDemo extends HTMLElement {
  private p: HTMLParagraphElement
  constructor() {
    super()
    const shaDom = this.attachShadow({ mode: 'open' })

    this.p = document.createElement('p')
    this.p.innerHTML = 'Hello World'
  }
  connectCallback() {
    // 文档被挂入 浏览器会调用这个方法
  }
  disconnectedCallback() {
    // 文档被从浏览器移除时调用
  }
  static get observedAttributes() {
    // 返回一个数组，包含需要观察的属性
    return []
  }
  attributeChangedCallback() {
    // 当自定义元素添加、删除、修改一个属性时，会调用这个方法
  }
  adoptedCallback() {
    // 当自定义元素被移动到新的文档时调用
  }
}
customElements.define('yi-demo', YiDemo)
