import Vue from 'vue'
Vue.mixin({
  data () {},
  computed: {},
  methods: {
    async $sleep (ms) {
      let timeout = () => {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
      await timeout(ms)
    },
    $getCookie (name) {
      const regex = new RegExp(`(?:(?:^|.*;*)${name}*=*([^;]*).*$)|^.*$`)
      return document.cookie.replace(regex, '$1')
    }
  },
  components: {}
})
