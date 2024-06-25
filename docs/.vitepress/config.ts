import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import menus from './menus'

export default defineConfig({
  title: 'Arto UI',
  description: '一个花哨的前端组件库',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src/', import.meta.url))
      }
    }
  },
  vue: {
    template: {
      compilerOptions: {
        // 将所有带短横线的标签名都视为自定义元素
        isCustomElement: (tag) => tag.includes('ar-')
      }
    }
  },
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/light/button/1' }
    ],
    sidebar: menus,

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
