import { createApp } from 'vue'
import App from './App.vue'
import router from './app/router'
import store from './data/store'
import 'tailwindcss/tailwind.css';

createApp(App).use(store).use(router).mount('#app')
