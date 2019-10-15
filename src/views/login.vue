<template>
  <div style="margin-top: 50px">
    <div style="text-align: center">
      <img src="../assets/logo.png" width="100" height="100"/>
    </div>
    <div style="text-align: center; margin: 30px 0; font-weight: bold; font-size: 18px;">
      欢迎您进入北京汇世达科技有限公司公众平台
    </div>
    <CellGroup>
      <Field
              v-model="username"
              required
              label="用户名"
              placeholder="请输入用户名"
      />
      <Field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
      />
    </CellGroup>
    <div style="margin: 30px 0 0; text-align: center">
      <Button type="info" style="width: 100%">登录</Button>
    </div>
  </div>
</template>

<script>
  // Cell,
  import { Button, CellGroup, Field } from 'vant'
  export default {
    components: {
      Button,
      CellGroup,
      Field
    },
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
