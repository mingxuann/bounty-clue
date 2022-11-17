import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
let routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/claim',
        name: 'claim',
        component: () => import('@/views/claim.vue'),
    },
    {
        path: '/promotion',
        name: 'promotion',
        component: () => import('@/views/promotion.vue'),
    },
    { path: '/:pathMatch(.*)*', name: 'notfound', redirect: '/home' },
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
})
export default router
