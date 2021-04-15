import { createRouter, createWebHashHistory } from 'vue-router';


 export const routes = [
    {
        path: '/',
        meta: { title: "首页", icon: "el-icon-s-home" },
        component: () => import('../layouts/index.vue'),
        children:[
            {
                path: "",
                component: () => import('../pages/home.vue'),
                name: "Home",
                meta: { title: "首页", icon: "el-icon-s-home" },
                children:[
                    {
                        path: "/home",
                        component: () => import('../pages/home.vue'),
                        name: "Homes",
                        meta: { title: "jiqnu ", icon: "el-icon-s-home" },

                    }
                ]
            }
        ]
    }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router
