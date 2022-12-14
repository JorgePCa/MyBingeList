import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path : '/',
        name:'home',
        alias: '/home',
        component:()=>import('../views/Home.vue')
    },
    {
        path : '/login',
        name:'login',
        component:()=>import('../views/LogIn.vue')
    },
    {
        path : '/createaccount',
        name:'createAccount',
        component:()=>import('../views/CreateAccount.vue')
    },
    {
        path : '/typebinge',
        name:'typeBinge',
        component:()=>import('../views/TypeBinge.vue')
    },
    {
        path : '/myaccount',
        name:'myAccount',
        component:()=>import('../views/MyAccount.vue')
    }

];

const router = createRouter({
    history : createWebHistory(),    
    routes,
})

export default router;