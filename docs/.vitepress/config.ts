import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'fancy ui',
  description: 'A VitePress Site',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src/', import.meta.url))
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
    sidebar: {
      '/guide/': [
        { text: '简介', link: '/guide/introduction' },
        {
          text: '使用教程',
          collapsed: false,
          items: [
            { text: '在Vue中使用', link: '/guide/use-vue' },
            { text: '在React中使用', link: '/guide/use-react' }
          ]
        }
      ],
      '/components/': [
        {
          text: '浅色组件',

          items: [
            {
              text: '按钮',
              collapsed: true,
              items: [
                { text: '按钮1', link: '/components/light/button/1' },
                { text: '按钮2', link: '/components/light/button/2' }
              ]
            }
          ]
        },
        {
          text: '深色组件',
          items: [
            {
              text: '按钮',
              collapsed: true,
              items: [
                { text: '按钮1', link: '/components/dark/button/1' },
                { text: '按钮2', link: '/components/dark/button/2' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
