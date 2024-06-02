import { defineCustomElement } from 'vue'
import Button from '@/components/Button1.ce.vue'

const componentGlobs = import.meta.glob('@/components/*.ce.vue', { eager: true })

const components=Object.entries(componentGlobs).map(([key,value])=>{
  console.log(key,value)
})

// console.log(components)

const FaButton = defineCustomElement(Button)

export { FaButton }

export default () => {
  customElements.define('fa-button', FaButton)
}
