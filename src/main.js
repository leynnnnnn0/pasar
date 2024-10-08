import { createApp } from 'vue'
import './index.css';
import App from './App.vue'
import router from './router/index.js';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from "./store/index.js";

const app = createApp(App);
app.use(router);
app.use(Toast);
app.use(store);
app.mount('#app');
