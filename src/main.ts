import { createApp } from 'vue'
import App from './App.vue'
// import UI from '../dist/fancy-ui'
import FancyUI from './release'
import '@/assets/main.css'

new FancyUI()

createApp(App).mount('#app')
