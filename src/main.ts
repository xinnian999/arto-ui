import { createApp } from 'vue'
import App from './App.vue'
// import UI from '../dist/fancy-ui'
import UI from './release'


createApp(App).use(UI).mount('#app')
