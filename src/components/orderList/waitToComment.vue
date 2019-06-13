<template>
<div>
    <div class="order-detail" v-for="(item,index) in comment" :key="index">
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
            comment: []
        }
    },
    methods: {
        getComment() {
            for(var item of this.$store.state.orderList){
                if(item.comment=== false &&item.sign=== true) {
                    this.comment.push(item)
                }
            }
        }
    },
    mounted() {
        this.getComment()
    }    
}
</script>
<style>
</style>

