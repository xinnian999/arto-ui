import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: true,
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./index.ts', import.meta.url)), //指定组件编译入口文件
      name: 'ArtoUI', // 包名
      fileName: 'arto-ui', // 打包文件名
      formats: ["umd", "es", "iife"],
    },
    // TODO: 由于是web-components组件库，必须把vue构建到dist里，才能多框架使用。
    // TODO: 但如果将vue构建到dist里。那么别人引入时，会破坏vue的热更新，导致热更新失效
    // rollupOptions: {
    //   external: ["vue"],
    //   output: {
    //     globals: {
    //       vue: "Vue",
    //     },
    //   },
    // },
  },
});