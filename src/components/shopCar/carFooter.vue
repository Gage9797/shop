<template>
  <div class="shopDetail-foot">
      <div class="kefu">
        <img src="../../assets/icon/kefu.png" alt="客服">
        <div @click="MessageBox">客服</div>
      </div>
      <div class="shopCar">
        <img src="../../assets/icon/car.png" alt="购物车">
        <div><router-link to="/shopCar">购物车</router-link></div>
      </div>
      <div class="joinCar" @click="joinCar">加入购物车</div>
      <div class="buy">立即购买</div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      title: '联系方式',
      message: '请致电：13286974450',
      showCancelButton: true
    }
  },
  props:["index"],
  methods: {
    MessageBox() {
      MessageBox.alert(this.message, this.title);
    },
    joinCar() {
      this.$store.state.shopCar.push(this.$store.state.shopList[this.index])
      Toast('成功加入购物车')
    }
  }
 }
</script>

<style>
.shopDetail-foot {
  display: flex;
  align-content: flex-end;
  height: 50px;
  width: 100%;
  background-color: white;
}
.shopDetail-foot a {
  color: black;
}
.kefu, .shopCar {
  width: 20%;
  text-align: center;
}
.kefu img, .shopCar img {
  height: 24px;
}
.joinCar {
  width: 30%;
  text-align: center;
  line-height: 50px;
  color: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: rgb(255, 94, 0);
}
.buy {
  width: 30%;
  text-align: center;
  line-height: 50px;
  color: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: rgb(236, 47, 33);
}
</style>

