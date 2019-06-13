<template>
<div class="orderList-contain">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1"><router-link to="/orderList/allList">全部</router-link></mt-tab-item>
        <mt-tab-item id="2"><router-link to="/orderList/waitToPay">待付款</router-link></mt-tab-item>
        <mt-tab-item id="3"><router-link to="/orderList/waitToDeliver">待发货</router-link></mt-tab-item>
        <mt-tab-item id="4"><router-link to="/orderList/waitToSign">待收货</router-link></mt-tab-item>
        <mt-tab-item id="5"><router-link to="/orderList/waitToComment">待评价</router-link></mt-tab-item>
    </mt-navbar>
    <div class="son-contain">
        <router-view></router-view>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            selected: '1',
        }
    }
}
</script>
<style>
.orderList-contain {
    margin-top: 26px;
    margin-bottom: 66px;
}
.orderList-contain .mint-navbar {
    width: 100%;
    margin-bottom: 30px;
    background-color: #efeff4;
    position: fixed;
    z-index: 999;

}
.orderList-contain  a{
    color: black;
}
.orderList-contain .mint-tab-item-label {
    font-size: 14px;
}
.son-contain {
    padding-top: 100px;
}
</style>

