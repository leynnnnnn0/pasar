import { createApp } from 'vue'
import './index.css';
import App from './App.vue'
import router from './router/index.js';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import vue3GoogleLogin from 'vue3-google-login'

const CLIENT_ID = '33802040921-reaort8acapc2e8fs36gt6j73sq7m2o2.apps.googleusercontent.com';

const app = createApp(App);
app.use(vue3GoogleLogin, {
    clientId: CLIENT_ID
})
app.use(router);
app.use(Toast);
app.mount('#app');
