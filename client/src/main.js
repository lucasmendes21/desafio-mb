import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import notificationPlugin from './plugin/notification'

createApp(App).use(notificationPlugin).mount('#app')
