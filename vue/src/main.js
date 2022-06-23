import store from './store'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App)
.use(store)
.mount('#app')
