import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '@/components/home';
import archive from '@/components/archive';
import game from '@/components/game';
import about from '@/components/about';

Vue.use(VueRouter);

const routes =  [
    {
        path: '/home',
        component: home
    },
    {
        path: '/archive',
        component: archive
    },
    {
        path: '/game',
        component: game
    },
    {
        path: '/about',
        component: about
    },
    // redirect
    {
        path: '/',
        redirect: '/home'
    }
]

const router = new VueRouter({
    base: __dirname,
    routes,
    mode:'hash'
});

export default router;