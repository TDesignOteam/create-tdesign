import { createApp } from 'vue'
import TDesign from 'tdesign-mobile-vue'
import App from './App.vue'
import router from './router'
import './style.css'

createApp(App).use(TDesign).use(router).mount('#app')
