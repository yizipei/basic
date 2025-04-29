import type { App } from 'vue'

export default {
  install(app: App) {
    app.config.globalProperties.Math = Math
    app.config.globalProperties.Date = Date
  },
}
