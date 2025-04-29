export default {
  "/guide/": [
    { text: "简介", link: "/guide/introduction" },
    {
      text: "使用",
      collapsed: false,
      items: [
        { text: "在Vue中使用", link: "/guide/use/use-vue" },
        { text: "在React中使用", link: "/guide/use/use-react" },
        { text: "在html中使用", link: "/guide/use/use-html" },
      ],
    },
    {
      text: "进阶",
      collapsed: false,
      items: [
        { text: "定制样式", link: "/guide/advanced/style" },
        // { text: "在React中使用", link: "/guide/use/use-react" },
        // { text: "在html中使用", link: "/guide/use/use-html" },
      ],
    },
    {
      text: "常见问题",
      collapsed: false,
      items: [
        { text: "Vue对WebComponents的警告", link: "/guide/question/vue-warn" },
        { text: "tsx文件的报错", link: "/guide/question/tsx-error" },
      ],
    },
  ],
};
