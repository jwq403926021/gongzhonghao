<template>
  <div>
    <div>
      欢迎您！ 李四 <a href="#">修改密码</a>
    </div>
    <div>
      查勘币： 100
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
