import 'normalize.css'
import 'animate.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import globalProperties from './config/globalProperties'
import '@/assets/iconfont.js'

const app = createApp(App)

app.config.errorHandler = (err) => {
  console.error(err)
}
app.use(globalProperties)

const pinia = createPinia()
// pinia 持久化插件
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
