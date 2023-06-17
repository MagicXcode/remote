import { createRouter, createWebHistory } from 'vue-router'
import vue1 from './components/1.vue'
import vue2 from './components/2.vue'
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
        }
    ]
})
export default routers