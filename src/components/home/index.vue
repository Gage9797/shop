<template>
<div>
    <div>
        <mt-swipe class="swipe" :auto="4000">
            <mt-swipe-item v-for="item in playList" :key="item.img">
                <img :src="item.img" alt="轮播图" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <hr/>
    <div class="shop">
        <div class="shopimg" v-for="(item,index) in shopList" :key="index">
            <router-link :to="'/home/shopDetail/'+item.id">
            <span>{{item.icon}}</span>
            <img :src="item.img" alt="商品图片" />
            <div class="title">{{item.title}}</div>
            <div class="describe">{{item.describe}}</div>
            <div class="price">¥{{item.price}}</div>
            </router-link>
        </div>
    </div>
    <hr/>
    <div class="invite">
        <div class="yqyl">
            <div>邀请有礼</div>
            <div>邀请好友有礼物</div>
            <img src="../../assets/icon/yaoqingyouli.png" alt="邀请有礼">
        </div>
        <div class="lqyh">
            <div>领券优惠</div>
            <div>领取神券有优惠</div>
            <img src="../../assets/icon/lingquanyouhui.png" alt="领券优惠">
        </div>
    </div>
    <hr/>
    <div>猜你喜欢</div>
    <div class="likeshop" v-for="item in shopList" :key="item.id">
        <router-link :to="'/home/shopDetail/'+item.id">
        <img :src="item.img" alt="商品图片" />
        <div class="title">{{item.title}}</div>
        <div class="describe">{{item.describe}}</div>
        <div class="price">¥{{item.price}}</div>
        </router-link>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            playList: [],
            shopList: ["1"]
        }
    },
    methods: {
        //请求轮播图数据
        getplayList() {
            this.$axios.get('/data/playList.json').then( res => {        
             if(res.status === 200) {
                 this.playList = res.data
             }
             else{
                 Toast('加载失败')
             }
         }).catch(function(error){
            console.log(error);
        })  
        },
        getshopList() {
            this.$axios.get('/data/shops.json').then( res => {        
             if(res.status === 200) {
                 this.shopList = res.data
                 this.$store.commit("updateShopList",this.shopList)
             }
             else{
                 Toast('加载失败')
             }
         }).catch(function(error){
            console.log(error);
        })  
        }
    },
       
    mounted() {
        this.getplayList(),
        this.getshopList()
    }
}
</script>

<style>
.swipe {
    height: 200px !important;
    position: absolute;
}
.swipe img {
    height: 200px;
    width: 100%;
}
.shop {
    margin-top: 10px;
    width: 100%;
    height: 200px;
    display: flex;
    overflow: scroll;
}
.shopimg {
    width: 110px;
    height: 200px;
    margin-left: 10px;
    position: relative;
    font-size: 12px;
}
.shopimg a, .shopimg a:active {
    color: black;
}
.shopimg:first-child {
    margin-left: 0px;
}
.shopimg span {
    position: absolute;
    top: 5px;
    right: 3px;
    background-color: #fee009;
    color: #ff2034;
    border-radius: 10px;
}
.shopimg img {
    height: 110px;
}
.title {
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.describe{
    opacity: 0.5;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.price{
    color: #fe0909e7;
}
.invite {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-bottom: 10px;
}
.invite img {
    height: 60px;
}
.invite .yqyl{
    width: 50%;
    height: 100px;
    overflow: hidden;
    text-align: center;
}
.invite .lqyh{
    width: 50%;
    height: 100px;
    overflow: hidden;
    text-align: center;
}
.likeshop {
    float: left;
    width: 45%;
    height: 250px;
    margin-left: 5%;
    background-color: aliceblue;
    border-radius: 5px;
    box-sizing: border-box;
    padding-bottom: 4px;
}
.likeshop a, .likeshop a:active {
    color: black;
}
.likeshop img{
    height: 160px;
    overflow: hidden;
}
</style>

