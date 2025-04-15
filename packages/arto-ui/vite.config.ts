import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// 接收 command 和 mode 参数
export default defineConfig(({ mode }) => {
  const isFullBuild = mode === "full";

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      lib: {
        entry: fileURLToPath(new URL("./index.ts", import.meta.url)),
        name: "ArtoUI",
        fileName: (format) =>
          isFullBuild ? `arto-ui.full.${format}.js` : `arto-ui.${format}.js`,
        formats: ["es", "umd"],
      },
      outDir: `dist/${isFullBuild ? "full" : "external"}`,
      rollupOptions: {
        external: isFullBuild ? [] : ["vue"],
        output: {
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  } satisfies UserConfig;
});
