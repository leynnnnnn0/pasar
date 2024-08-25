import {createRouter, createWebHistory} from 'vue-router';
import HomeView from "../views/HomeView.vue";
import WelcomeView from "../views/WelcomeView.vue";
import ExamView from "../views/ExamView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/pdf-to-exam',
            name: 'pdf to exam',
            component: HomeView,
            meta: {requiresAuth: true}
        },
        {
            path: '/',
            name: 'welcome',
            component: WelcomeView,
        },
        {
            path: '/exam',
            name: 'exam',
            component: ExamView,
            meta: {requiresAuth: true}
        },
    ],
})

// Add this navigation guard

export default router;