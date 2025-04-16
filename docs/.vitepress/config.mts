import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

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
      { text: "浅色组件", link: "/light-components/button/button-2" },
      { text: "深色组件", link: "/dark-components/button/button-1" },
    ],
    sidebar,

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
