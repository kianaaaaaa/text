import { createRouter, createWebHashHistory } from 'vue-router';


 export const routes = [
    {
        path: '/',
        name: 'yis',
        component: () => import('../layouts/index.vue'),
        children:[
            {
                path: "/",
                component: () => import('../pages/home.vue'),
                name: "Home",
                meta: { title: "首页", icon: "el-icon-s-home" },
                children:[
                    {
                        path: "/user",
                        component: () => import('../pages/user.vue'),
                        name: "user",
                        meta: { title: "用户 ", icon: "el-icon-s-home" },

                    }
                ]
            },
            {
                path: "/home",
                component: () => import('../pages/home.vue'),
                name: "Home1",
                meta: { title: "废物", icon: "el-icon-s-home" },
                children:[
                    {
                        path: "/home",
                        component: () => import('../pages/home.vue'),
                        name: "Homes",
                        meta: { title: "飞洒客户 ", icon: "el-icon-s-home" },

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
