import type { App } from 'vue'

export default {
  install(app: App) {
    app.config.globalProperties.Math = Math
    app.config.globalProperties.Date = Date
    app.config.globalProperties.$pxToVw = function pxToVw(
      value?: string | number,
      designWidth = 375,
    ) {
      if (!value) return '0vw'
      // 提取像素值
      const pxValue = typeof value === 'string' ? parseFloat(value) : value
      // 计算对应的 vw 值
      const vwValue = (pxValue / designWidth) * 100
      return `${vwValue}vw`
    }
  },
}
