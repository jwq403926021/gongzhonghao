<template>
  <div class="hello">
    123
    <Button type="danger">危险按钮</Button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'HelloWorld',
  components: {
    Button
  },
  props: {
    msg: String
  },
  mounted () {
    console.log(Button)
  }
}
</script>
<style scoped>
</style>
