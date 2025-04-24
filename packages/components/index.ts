import { defineCustomElement } from "vue";
import { splitNamespace, toCamelCase, setParts } from "./utils";

const componentGlobs: {
  [path: string]: {
    default: any;
    meta: any;
  };
} = import.meta.glob<any>("./*/*.ce.vue", {
  eager: true,
});

const components: { [key: string]: { new(): void } } = Object.entries(componentGlobs).reduce(
  (acc, [k, v]) => {
    const componentName = splitNamespace(k);
    const camelCaseName = toCamelCase(componentName);
    const comp = v.default;

    // ✅ 给组件根元素注入 mounted 钩子（自动设置 part）
    const originalMounted = comp.mounted;
    comp.mounted = function () {
      setParts(this.$el); // 自动给每个内部元素设置 part
      if (typeof originalMounted === 'function') {
        originalMounted.call(this);
      } else if (Array.isArray(originalMounted)) {
        originalMounted.forEach(fn => fn.call(this));
      }
    };

    if (!customElements.get(componentName)) {
      customElements.define(componentName, defineCustomElement(comp));
    }

    return {
      ...acc,
      [camelCaseName]: class {}
    };
  },
  {}
);

export const metas = Object.entries(componentGlobs)
  .map(([k, v]) => {
    return { ...v.meta, name: splitNamespace(k) };
  })
  .filter((v) => v);

export default components;
