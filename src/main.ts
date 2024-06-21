import { createApp } from 'vue'
import App from './App.vue'
// import UI from '../dist/arto-ui'
import ArtoUI from './release'
import '@/assets/main.css'

new ArtoUI()

createApp(App).mount('#app')
