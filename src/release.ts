import { defineCustomElement } from 'vue'

const componentGlobs = import.meta.glob('@/components/*.ce.vue', { eager: true })

const components = Object.entries(componentGlobs).reduce((acc, [k, v]) => {
  const fileName = k.split('/')[3].split('.')[0]
  const [name, num] = fileName.match(/(\D+)(\d+)/)?.slice(1)!
  const key = `fa-${name}-${num}`

  const value = function () {
    customElements.define(key, defineCustomElement(v.default))
  }

  return { ...acc, [key]: value }
}, {})

export default () => {
  Object.values(components).forEach((component) => {
    new component()
  })
}
