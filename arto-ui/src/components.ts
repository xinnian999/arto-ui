import { defineCustomElement } from "vue";

const toCamelCase = (str: string) => {
  return str
    .split("-") // 将字符串按 '-' 分割成数组
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 将每个单词的首字母大写
    .join(""); // 将数组重新合并成字符串
};

const componentGlobs = import.meta.glob<any>("./components/*/*.ce.vue", {
  eager: true,
});

const components: { [key: string]: { new (): void } } = Object.entries(
  componentGlobs
).reduce((acc, [k, v]) => {
  const fileName = "ar-" + k.split("/").pop()?.split(".")[0];

  const value = class {
    constructor() {
      customElements.define(fileName, defineCustomElement(v.default));
    }
  };

  return { ...acc, [toCamelCase(fileName)]: value };
}, {});

export default components;

export const { FaLightButton1, FaLightButton2 } = components;
