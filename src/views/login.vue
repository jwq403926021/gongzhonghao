<template>
  <div style="margin-top: 50px">
    <div style="text-align: center">
      <img src="../assets/logo.png" width="100" height="100"/>
    </div>
    <div style="text-align: center; margin: 30px 0; font-weight: bold; font-size: 18px;">
      欢迎您进入北京汇世达科技有限公司公众平台
    </div>
    <van-cell-group>
      <van-field
              v-model="username"
              required
              label="用户名"
              placeholder="请输入用户名"
      />
      <van-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
      />
    </van-cell-group>
    <div style="margin: 30px 0 0; text-align: center">
      <van-button type="info" style="width: 100%">登录</van-button>
    </div>
  </div>
</template>

<script>
  // Cell,
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    mounted () {
      console.log(123)
    }
  }
</script>

<style>
</style>
