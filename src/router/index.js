import {createRouter, createWebHistory} from 'vue-router';
import HomeView from "../views/HomeView.vue";
import WelcomeView from "../views/WelcomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/pdf-to-exam',
            name: 'pdf to exam',
            component: HomeView,
        },
        {
            path: '/',
            name: 'welcome',
            component: WelcomeView,
        }
    ],
})
export default router;