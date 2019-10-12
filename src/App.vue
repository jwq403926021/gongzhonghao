<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  beforeMount () {
    // xhr.open('GET', `https://aplusprice.xyz/aprice/sys/pay/getOpenId?code=${code}`)
  }
}
</script>

<style>
</style>
