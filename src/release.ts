import { defineCustomElement } from 'vue'
import { toCamelCase } from '@/utils/toCamelCase'

const componentGlobs = import.meta.glob('@/components/*.ce.vue', { eager: true })

const components = Object.entries(componentGlobs).reduce((acc, [k, v]) => {
  const fileName = k.split('/')[3].split('.')[0]
  const [name, num] = fileName.match(/(\D+)(\d+)/)?.slice(1)!
  const key = `fa-${name}-${num}`

  const value = function () {
    customElements.define(key, defineCustomElement(v.default))
  }

  return { ...acc, [toCamelCase(key)]: value }
}, {})

export const { FaButton1 } = components

export default () => {
  Object.values(components).forEach((register) => register())
}
