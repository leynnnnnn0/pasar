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
router.beforeEach((to, from, next) => {
    const isAuthorized = JSON.parse(localStorage.getItem('isAuthorized')).isAuthorized || false;
    console.log(isAuthorized)

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthorized) {
            next({ name: 'welcome' });  // Redirect to welcome page if not authenticated
        } else {
            next();  // Proceed to route
        }
    } else {
        next();  // Always allow access to public routes
    }
})

export default router;