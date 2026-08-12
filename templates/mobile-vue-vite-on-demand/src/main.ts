import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import 'tdesign-mobile-vue/es/style/index.css'

createApp(App).use(router).mount('#app')
