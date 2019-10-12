import Vue from 'vue'

import '@/scss/main.scss'
import store from '@/config/store'
import router from '@/config/router'
import '@/config/axios'
import '@/config/mixin.js'

import App from './App.vue'

Vue.config.productionTip = false
console.log(router, '???')
new Vue({
  data () {
    return {}
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
