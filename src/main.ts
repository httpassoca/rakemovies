import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router';
import { OhVueIcon } from 'oh-vue-icons';
const pinia = createPinia();
import App from './App.vue'
import './style.css'
import './icons.ts'

// @ts-ignore
const app = createApp(App);
app.component("VIcon", OhVueIcon);
app.use(router);
app.use(pinia);
app.mount("#app");

