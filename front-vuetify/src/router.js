import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : "/",
        alias : "/home",
        name : "home",
        component: () => import("./components/Home.vue")
    },
    {
        path : "/login",
        name : "login",
        component: () => import("./components/LogIn.vue")
    },
    {
        path : "/createaccount",
        name :"createAccount",
        component: () => import("./components/CreateAccount.vue")
    },
    {
        path : "/typebinge",
        name : "typeBinge",
        component: () => import("./components/TypeBinge.vue")
    },
    {
        path : "/myaccount",
        name : "myAccount",
        component: () => import("./components/MyAccount.vue")
    },
    {
        path : "/searchPage",
        name : "searchPage",
        component: () => import("./components/SearchPage.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;