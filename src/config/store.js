import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    oa: {},
  },
  getters: {},
  mutations: {
    oa (state, n) {
      state.oa = n
    }
  },
  actions: {
  }
})
