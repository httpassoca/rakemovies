import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiExternalLink, HiSearch, BiArrowBarLeft } from "oh-vue-icons/icons";
import { router } from './router';
const pinia = createPinia();
import App from './App.vue'
import './style.css'

addIcons(HiExternalLink, HiSearch, BiArrowBarLeft);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(pinia);
app.mount("#app");

