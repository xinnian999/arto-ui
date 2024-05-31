import { defineCustomElement } from 'vue'
import Button from '@/components/Button1.ce.vue'

const FaButton = defineCustomElement(Button)

export { FaButton }

export default () => {
  customElements.define('fa-button', FaButton)
}
