export default {
  "/guide/": [
    { text: "简介", link: "/guide/introduction" },
    {
      text: "使用教程",
      collapsed: false,
      items: [
        { text: "在Vue中使用", link: "/guide/use/use-vue" },
        { text: "在React中使用", link: "/guide/use/use-react" },
        { text: "在html中使用", link: "/guide/use/use-html" },
      ],
    },
    {
      text: "常见问题",
      collapsed: false,
      items: [
        { text: "Vue对WebComponents的警告", link: "/guide/question/vue-warn" },
      ],
    },
  ],

  "/light-components/": [
    {
      text: "按钮",
      items: [{ text: "按钮2", link: "/light-components/button/button-2" }],
    },
  ],
  "/dark-components/": [
    {
      text: "按钮",
      items: [
        { text: "按钮1", link: "/dark-components/button/button-1" },
        { text: "按钮3", link: "/dark-components/button/button-3" },
        { text: "按钮5", link: "/dark-components/button/button-5" },
      ],
    },
    {
      text: "开关",
      items: [
        { text: "开关1", link: "/dark-components/switch/switch-1" },
      ],
    },
  ],
};
