import ChildB from './components/HelloWorld.vue';

import {createRouter, createWebHistory} from 'vue-router';

const routers=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/res',
            component:ChildB
        },

    ]
})

export default routers;