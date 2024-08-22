import { createApp } from 'vue'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'
createApp(App).mount('#app')
microApp.start()