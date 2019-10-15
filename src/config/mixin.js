import Vue from 'vue'
Vue.mixin({
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
    },
    $queryString (queryString) {
      let query = {}
      let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&')
      for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=')
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
      }
      return query
    }
  },
  components: {}
})
