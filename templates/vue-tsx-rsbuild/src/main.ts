import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'
import App from './App'
import router from './router'
import './style.css'

createApp(App).use(TDesign).use(router).mount('#app')
