import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },{
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  }, {
    path: '/column/:id',
    name: 'column',
    component: () => import('@/views/column.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
