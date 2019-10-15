import Vue from 'vue'
import Router from 'vue-router'
const login = () => import('@/views/login.vue')
const index = () => import('@/views/index.vue')
const createHelp = () => import('@/views/createHelp.vue')
const helpList = () => import('@/views/help-list.vue')

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
    path: '/create-help',
    name: 'createHelp',
    component: createHelp,
  }, {
    path: '/help-list',
    name: 'helpList',
    component: helpList,
  }, {
    path: '*',
    redirect: {
      name: 'index'
    }
  }]
})
