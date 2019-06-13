<template>
<div>
    <div class="order-detail" v-for="(item,index) in orderList" :key="index">
        <div class="shopCar-storeName">xx治官方旗舰店 <span class="status">{{item.status}}</span></div>
        <div class="shopCar-shopName">
            <div><img :src="item.img"/></div>
            <div>
                <div class="title">{{item.title}}</div>
                <div class="describe">{{item.describe}}</div>
                <div class="price">¥{{item.price}}</div>             
            </div>
        </div>
        <div class="info">
            <div>共{{item.num}}件商品    合计：¥{{item.price*item.num}}</div>
        </div>
        <div class="orderList-status">
            <div>延长收货</div>
            <div>查看物流</div>
            <div>确认收货</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            orderList: [],
        }
    },
    methods: {
        getorderList() {
            this.orderList = this.$store.state.orderList
        },
    },
    mounted() {
        this.getorderList()
    }    
}
</script>
<style>
.order-detail {
    width: 95%;
    height: 200px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: white;
    margin-bottom: 20px;
}
.status {
    float: right;
    color: #f13333;
}
.info ,.orderList-status{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 10px;
}
.orderList-status div {
    width: 80px;
    line-height: 30px;
    text-align: center;
    margin-right: 3px;
    border: 1px solid #b3acac;
    border-radius: 25px;
}
</style>

