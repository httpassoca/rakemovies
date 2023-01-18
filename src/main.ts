import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router';
import { OhVueIcon } from 'oh-vue-icons';
const pinia = createPinia();
import App from './App.vue'
import './style.css'
import './icons.ts'

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(pinia);
app.mount("#app");

