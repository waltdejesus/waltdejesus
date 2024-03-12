import { createRouter, createWebHistory } from "vue-router";




const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../pages/home.vue'),
    },
    {
        path: "/cv",
        name: "CV",
        component: () => import('../pages/cv.vue'),
    },
    {
        path: "/work",
        name: "Works",
        component: () => import('../pages/works.vue'),
    },
    {
        path: "/prj",
        name: "Prj",
        component: () => import('../pages/prj.vue'),
    },
    {
        path: "/teste",
        name: "Teste",
        component: () => import('../pages/teste.vue'),
    },
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
