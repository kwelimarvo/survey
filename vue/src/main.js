import store from './store'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

createApp(App)
.use(store)
.use(router)
.mount('#app')
