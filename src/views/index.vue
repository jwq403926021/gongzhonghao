<template>
  <div>
    <div style="margin: 10px;">
      <a href="#" style="float: right; font-size: 12px;">修改密码</a><span>欢迎您！ 李四</span>
    </div>
    <div style="margin: 10px;">
      查勘币： 100 <img src="../assets/coin.png" style="margin-top: -3px; vertical-align: middle" width="15" height="15"/>
    </div>
    <van-grid clickable :column-num="1">
      <van-grid-item icon="home-o" text="发起互助" to="/create-help" />
      <van-grid-item icon="search" text="互助反馈" to="/" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
