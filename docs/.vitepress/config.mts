import { defineConfig } from "vitepress";
import menus from "./menus";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Arto UI",
  description: "一个花哨的前端组件库",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/introduction" },
      { text: "组件", link: "/components" },
    ],
    sidebar: menus,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    server: {
      host: true,
    },
  },
});
