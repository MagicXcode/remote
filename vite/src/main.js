import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import routers from './router'
createApp(App).use(ElementPlus).use(routers).mount('#app')
