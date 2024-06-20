import { defineCustomElement } from 'vue'
import { toCamelCase } from '@/utils'

const componentGlobs = import.meta.glob<any>('@/components/*/*.ce.vue', { eager: true })

const components: { [key: string]: { new (): void } } = Object.entries(componentGlobs).reduce(
  (acc, [k, v]) => {
    const fileName = v.default.__name.split('.')[0]

    const value = class {
      constructor() {
        customElements.define(fileName, defineCustomElement(v.default))
      }
    }

    return { ...acc, [toCamelCase(fileName)]: value }
  },
  {}
)

export default components

export const { FaLightButton1, FaLightButton2 } = components
