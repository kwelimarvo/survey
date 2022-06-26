import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../views/Dashboard.vue'
import Surveys from '../views/Surveys.vue'
import Register from '../views/Register.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import Login from '../views/Login.vue'


const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Dashboard',
        component: DefaultLayout
    }, 
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router