import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login.vue'
import index from '@/views/index.vue'
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
