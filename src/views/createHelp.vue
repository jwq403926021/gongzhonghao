<template>
  <div>
    <van-nav-bar
      title="发起互助"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"></van-nav-bar>
    <van-cell-group>
      <van-field
              v-model="name"
              required
              label="被互助人姓名"
              placeholder="请输入姓名"
      />
      <van-field
              v-model="phone"
              required
              label="联系方式"
              placeholder="请输入联系方式"
      />
      <van-field
              v-model="name2"
              required
              label="发起人姓名"
              placeholder="请输入姓名"
      />
      <van-field
              v-model="phone2"
              required
              label="发起人手机"
              placeholder="请输入发起人手机"
      />
      <van-field
              v-model="reason"
              label="互助原因"
              type="textarea"
              placeholder="请输入留言"
              rows="3"
              autosize
      />
      <van-field
              readonly
              clickable
              label="状态"
              :value="status"
              placeholder="请选择状态"
              @click="show = true"
      />
      <van-field
              v-model="price"
              required
              label="打款金额(元)"
              placeholder="请输入金额"
      />
      <van-field
              v-model="comment"
              label="说明"
              type="textarea"
              placeholder="请输入说明"
              rows="3"
              autosize
      />
    </van-cell-group>
    <van-button type="info" style="width: 100%">发起互助</van-button>
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="show = false" @confirm="onConfirm"></van-picker>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'createHelp',
  data () {
    return {
      name: '',
      phone: '',
      name2: '',
      phone2: '',
      reason: '',
      price: '',
      comment: '',
      show: false,
      status: '',
      columns: [
        { text: '宁波' },
        { text: '温州' }
      ]
    }
  },
  methods: {
    onClickLeft () {},
    onConfirm () {
      console.log(`onConfirm`);
    }
  }
}
</script>

<style>
</style>
