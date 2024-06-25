export default {
  '/guide/': [
    { text: '简介', link: '/guide/introduction' },
    {
      text: '使用教程',
      collapsed: false,
      items: [
        { text: '在Vue中使用', link: '/guide/use/use-vue' },
        { text: '在React中使用', link: '/guide/use/use-react' },
        { text: '在html中使用', link: '/guide/use/use-html' }
      ]
    },
    {
      text: '常见问题',
      collapsed: false,
      items: [{ text: 'Vue对WebComponents的警告', link: '/guide/question/vue-warn' }]
    }
  ],

  '/components/': [
    {
      text: '🌞【浅色组件】🌞',

      items: [
        {
          text: '按钮',
          collapsed: true,
          items: [
            { text: '按钮1', link: '/components/light/button/1' },
            { text: '按钮2', link: '/components/light/button/2' },
            { text: '按钮3', link: '/components/light/button/3' },
            { text: '按钮4', link: '/components/light/button/4' }
          ]
        }
      ]
    },
    {
      text: '🌛【深色组件】🌛',
      items: [
        {
          text: '按钮',
          collapsed: true,
          items: [
            { text: '按钮1', link: '/components/dark/button/1' },
            { text: '按钮2', link: '/components/dark/button/2' }
          ]
        },
        {
          text: '菜单',
          collapsed: true,
          items: [{ text: '菜单1', link: '/components/dark/menu/1' }]
        }
      ]
    }
  ]
}
