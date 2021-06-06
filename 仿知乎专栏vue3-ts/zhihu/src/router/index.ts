import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import store from '../store/index'
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
    meta: { redirectAlreadyLogin: true },
    component: () => import('@/views/login.vue')
  }, {
    path: '/about',
    name: 'about',

    component: () => import('@/views/About.vue')
  }, {
    path: '/column/:id',
    name: 'column',
    component: () => import('@/views/column.vue')
  }, {
    path: '/createPost',
    name: 'createPost',
    meta: { requiredLogin: true },
    component: () => import('@/views/CreatePost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
/* 路由守卫 */
router.beforeEach((to, from, next) => {
  console.log(to.meta)

  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }
})
export default router
