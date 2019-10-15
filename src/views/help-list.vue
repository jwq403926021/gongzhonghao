<template>
  <div>
    <van-nav-bar
      title="互助列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"></van-nav-bar>
    <div>
      <h2 class="wrap-title">过滤条件</h2>
      <van-cell-group>
        <van-field
                v-model="name"
                label="被互助人姓名"
                placeholder="请输入姓名"
        />
        <van-field
                v-model="phone"
                label="联系方式"
                placeholder="请输入联系方式"
        />
        <van-field
                readonly
                clickable
                label="状态"
                :value="status"
                placeholder="请选择状态"
                @click="show = true"
        />
      </van-cell-group>
      <div style="margin: 10px 0; text-align: center">
        <van-button size="small">重置</van-button> &nbsp;&nbsp;
        <van-button size="small" type="info">查询</van-button>
      </div>
    </div>
    <div>
      <h2 class="wrap-title">互助列表</h2>
      <div>
        <van-panel title="被互助人：李四" status="已发起">
          <div class="list-content">
            <p>被互助人电话：15904848505</p>
          </div>
        </van-panel>

        <van-panel title="被互助人：李四" status="已发起">
          <div class="list-content">
            <p>被互助人电话：15904848505</p>
          </div>
        </van-panel>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="show = false" @confirm="onConfirm"></van-picker>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'helpList',
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
