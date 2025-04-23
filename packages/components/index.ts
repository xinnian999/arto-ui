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

const components: { [key: string]: { new(): void } } = Object.entries(
  componentGlobs
).reduce((acc, [k, v]) => {
  const componentName = splitNamespace(k);

  return {
    ...acc,
    [toCamelCase(componentName)]: class {
      constructor() {
        v.default.directives = {
          part: {
            mounted: setParts
          }
        }

        customElements.define(componentName, defineCustomElement(v.default));
      }
    },
  };
}, {});

export const metas = Object.entries(componentGlobs)
  .map(([k, v]) => {
    return { ...v.meta, name: splitNamespace(k) };
  })
  .filter((v) => v);

export const { ArButton1, ArButton2 } = components;

export default components;
