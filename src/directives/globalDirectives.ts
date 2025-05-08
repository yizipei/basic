import type { App } from 'vue'

// const directives = {
//   // 拖动指令
//   vDrag: {
//     mounted(el: HTMLElement) {
//       el.style.cursor = 'move'
//       el.style.position = 'absolute'
//       el.onmousedown = function (e) {
//         const disX = e.clientX - el.offsetLeft
//         const disY = e.clientY - el.offsetTop
//         document.onmousemove = function (e) {
//           const left = e.clientX - disX
//           const top = e.clientY - disY
//           console.log(left, top)
//           el.style.left = left + 'px'
//           el.style.top = top + 'px'
//         }
//       }
//     },
//   },
//   // 文字变红
//   vDed: {
//     mounted(el: HTMLElement) {
//       el.style.color = 'red'
//     },
//   },
// }
//
// export default {
//   install: (app: App) => {
//     ;(Object.keys(directives) as Array<keyof typeof directives>).forEach((key) => {
//       app.directive(key, directives[key])
//     })
//   },
// }

export const vDrag = {
  mounted: (el: HTMLElement) => {
    el.style.cursor = 'move'
    el.style.position = 'absolute'
    el.onmousedown = function (e) {
      const disX = e.clientX - el.offsetLeft
      const disY = e.clientY - el.offsetTop
      document.onmousemove = function (e) {
        const left = e.clientX - disX
        const top = e.clientY - disY
        console.log(left, top)
        el.style.left = left + 'px'
        el.style.top = top + 'px'
      }
    }
  },
}
// 文字变红
export const vRed = {
  mounted(el: HTMLElement) {
    el.style.color = 'red'
  },
}
