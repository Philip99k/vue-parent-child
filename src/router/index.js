import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateParent from '../views/CreateParent.vue'
import CreateChild from '../views/CreateChild.vue'
import InfoPage from '../views/InfoPage.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/create-parent',
        name: 'CreateParent',
        component: CreateParent
    },
    {
        path: '/create-child',
        name: 'CreateChild',
        component: CreateChild
    },
    {
        path: '/info-page',
        name: 'InfoPage',
        component: InfoPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router