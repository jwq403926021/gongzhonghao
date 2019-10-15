import Vue from 'vue'
import '@/scss/main.scss'
import store from '@/config/store'
import router from '@/config/router'
import '@/config/axios'
import '@/config/mixin.js'
import App from './App.vue'
import 'vant/lib/index.css';

Vue.config.productionTip = false

import { NavBar, Button, CellGroup, Field, Popup, Picker, Cell, Panel, Grid, GridItem } from 'vant'

Vue.use(NavBar)
Vue.use(Button)
Vue.use(CellGroup)
Vue.use(Field)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Cell)
Vue.use(Panel)
Vue.use(Grid)
Vue.use(GridItem)

new Vue({
  data () {
    return {}
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
