import vue1 from './page/pageone/1.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import app from './App.vue';
const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component:app
        },
        {
            path: '/res',
            component:vue1
        }
    ]
})

export default routers;