import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'
import Home from '../views/Home.vue'

const store = useStore()
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
    component: () => import('@/views/CreatePost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
console.log(store)
/* 路由守卫 */
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else {
    next()
  }
})
export default router
