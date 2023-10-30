import './assets/main.css';
import '@/assets/scss/styles.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import all of Bootstrap's JS
import  'bootstrap'

const app = createApp(App)

app.use(router)

app.mount('#app')

