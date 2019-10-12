import Vue from 'vue'
import Axios from 'axios/dist/axios'
// const CancelToken = Axios.CancelToken
const axios = Axios.create({
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})
// axios.interceptors.response.use(res => {
//   return res
// }, err => {})
Vue.prototype.$axios = axios
Vue.prototype.$get = async function (url, params = {}, options = {}) {
  let timestamp = +new Date()
  params._cache = timestamp
  options.params = params
  let res = await axios.get(url, options)
  let data = null
  if (res.data) {
    data = res.data
  } else {
    data = res
  }
  return data
}
Vue.prototype.$delete = async function (url, params = {}) {
  let timestamp = +new Date()
  params._cache = timestamp
  let res = await axios.delete(url, { params: params })
  let data = null
  if (res.data) {
    data = res.data
  } else {
    data = res
  }
  return data
}
Vue.prototype.$post = async function (url, params = {}, options = {}) {
  let timestamp = +new Date()
  params._cache = timestamp
  let res = await axios.post(url, params, options)
  let data = null
  if (res.data) {
    data = res.data
  } else {
    data = res
  }
  return data
}
Vue.prototype.$postForm = async function (url, params = {}, options = {}) {
  let fd = new FormData()
  let timestamp = +new Date()
  params._cache = timestamp
  for (let [k, v] of Object.entries(params)) {
    fd.append(k, v)
  }
  let res = await axios.post(url, fd, options)
  let data = null
  if (res.data) {
    data = res.data
  } else {
    data = res
  }
  return data
}
Vue.prototype.$put = async function (url, params = {}, options = {}) {
  let fd = new FormData()
  let timestamp = +new Date()
  params._cache = timestamp
  for (let [k, v] of Object.entries(params)) {
    fd.append(k, v)
  }
  let res = await axios.put(url, fd, options)
  let data = null
  if (res.data) {
    data = res.data
  } else {
    data = res
  }
  return data
}
export default axios
