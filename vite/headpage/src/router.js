import { createRouter, createWebHistory } from 'vue-router'
import vue1 from './components/1.vue'
import vue2 from './components/2.vue'
import vue3 from './components/3.vue'
import vue5 from './components/5.vue'
const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/vue1',
            component: vue1
        },
        {
          path: '/vue2',
          component: vue2
        },
        {
            path: '/vue3',
            component: vue3
        },
        {
            path: '/vue5',
            component: vue5
        },
        {
            path: '/vue4',
            component: () => import('./components/4.vue')
        }
    ]
})
export default routers