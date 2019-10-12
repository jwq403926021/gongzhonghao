import Vue from 'vue'
import Router from 'vue-router'
const login = () => import('@/views/login.vue')
const index = () => import('@/views/index.vue')

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    redirect: {
      name: 'index'
    }
  }, {
    path: '/index',
    name: 'index',
    component: index,
  }, {
    path: '/login',
    name: 'login',
    component: login,
  }, {
    path: '*',
    redirect: {
      name: 'index'
    }
  }]
})
