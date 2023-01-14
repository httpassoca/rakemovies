import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
const pinia = createPinia();

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSearch } from "oh-vue-icons/icons";

addIcons(HiSearch);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(pinia);
app.mount("#app");

