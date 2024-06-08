import { defineCustomElement } from 'vue'
import { toCamelCase } from '@/utils'

const componentGlobs = import.meta.glob<any>('@/components/*.ce.vue', { eager: true })

const components: { [key: string]: { new (): void } } = Object.entries(componentGlobs).reduce(
  (acc, [k, v]) => {
    const fileName = k.split('/')[3].split('.')[0]
    // eslint-disable-next-line no-unsafe-optional-chaining
    const [name, num] = fileName.match(/(\D+)(\d+)/)?.slice(1)!
    const key = `fa-${name}-${num}`

    const value = class {
      constructor() {
        customElements.define(key, defineCustomElement(v.default))
      }
    }

    return { ...acc, [toCamelCase(key)]: value }
  },
  {}
)

export default components

export const { FaButton1, FaButton2 } = components
