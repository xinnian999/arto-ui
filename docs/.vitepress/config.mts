import { defineConfig } from "vitepress";
import sidebar from "./sidebar";
import Restart from "vite-plugin-restart";

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
    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    server: {
      host: true,
    },
    plugins: [
      // @ts-ignore
      Restart({
        restart: ["packages/components/**/*.ce.vue"],
      }),
    ],
  },
});
