import { defineCustomElement } from "vue";

const toCamelCase = (str: string) => {
  return str
    .split("-") // 将字符串按 '-' 分割成数组
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 将每个单词的首字母大写
    .join(""); // 将数组重新合并成字符串
};

const componentGlobs: {
  [path: string]: {
    default: any;
    meta: any;
  };
} = import.meta.glob<any>("./*/*.ce.vue", {
  eager: true,
});

const components: { [key: string]: { new (): void } } = Object.entries(
  componentGlobs
).reduce((acc, [k, v]) => {
  const componentName = "ar-" + k.split("/").pop()?.split(".")[0];

  return {
    ...acc,
    [toCamelCase(componentName)]: class {
      constructor() {
        customElements.define(componentName, defineCustomElement(v.default));
      }
    },
  };
}, {});

export const metas = Object.values(componentGlobs)
  .map((v) => {
    return v.meta;
  })
  .filter((v) => v);

export const { ArButton1, ArButton2 } = components;

export default components;
