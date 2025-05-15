import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import tailwindcss from '@tailwindcss/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd()) // 获取.env文件里定义的环境变量

  console.log('process.env: ', env.VITE_BASE_URL)
  return {
    server: {
      port: 6001,
      host: '0.0.0.0',
      open: false,
      proxy: {
        [env.VITE_BASE_SERVE]: {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => {
            console.log(`代理路径：${path}`)
            return path.replace(/^\/api/, '')
          },
        },
      },
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => {
              return tag.startsWith('yi-')
            },
          },
        },
      }),
      vueJsx(),
      // vueDevTools(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [],
        packagePresets: ['es-toolkit'],
        dirs: ['./src/composables/**'],
      }),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
  }
})
