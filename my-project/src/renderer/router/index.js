import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "RenamePage" */ '@/pages/home/index.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
