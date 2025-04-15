import { defineConfig, type UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ command }) => {
  const config: UserConfig = {
    plugins: [vue()],
    build: {
      lib: {
        entry: fileURLToPath(new URL("./index.ts", import.meta.url)), // 组件库入口
        name: "ArtoUI", // UMD 全局变量名
        fileName: "arto-ui", // 输出的文件名
        formats: ["umd", "es", "iife"], // 构建多个模块格式，满足多场景使用
      },
      // 注意：由于是构建 Web Components 组件库，Vue 必须打包进产物中，
      // 所以不能 external 掉 Vue（否则非 Vue 项目没法使用）
      // rollupOptions: {
      //   external: ["vue"],
      //   output: {
      //     globals: {
      //       vue: "Vue",
      //     },
      //   },
      // },
    },
  };

  // Vue 官方 issue#13202：https://github.com/vuejs/core/issues/13202
  // 默认打包会把 dev 版 Vue runtime 构建进去，
  // 在 Vue 项目中使用该组件库时，会和项目的 dev 版 Vue 混用，从而破坏热更新。
  // 所以这里强制设置为 production 模式，让构建时使用 prod 版 Vue，避免副作用。
  if (command === "build") {
    config.define = {
      ...config.define,
      "process.env.NODE_ENV": JSON.stringify("production"),
    };
  }

  return config;
});
