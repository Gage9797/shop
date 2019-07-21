<template>
<div class= "contain">
	<div class="header">
		<span class="return" v-if="flag" @click="goback">返回</span>
		<span class="title">小商城项目</span>
	</div>
	<transition name="slide" mode="out-in">
		<router-view></router-view>
	</transition>
   <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopCar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>     
			<router-link class="mui-tab-item" to="/orderList">
				<span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
				<span class="mui-tab-label">订单</span>
			</router-link>
			<router-link class="mui-tab-item" to="/person">
				<span class="mui-icon mui-icon-person-filled"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
	</nav>
</div>
</template>
<script>
import { sign } from 'crypto'
import { truncate } from 'fs'
import { Toast } from 'mint-ui'
export default {
	data() {
		return {
			flag: "",
		}
	},
	mounted() {
		this.flag= this.$route.path === "/home/index"? false : true,
		this.getshopCar(),
		this.getorderList()
	},
	methods: {
		//顶部返回上一层路由
		goback() {
			this.$router.go(-1)
		},
		//请求购物车数据，并保存到vuex中
		getshopCar() {
            this.$axios.get('/data/shopCar.json').then( res => {        
             if(res.status === 200) {
                 this.$store.commit("updateShopCar",res.data)
             }
             else{
                 Toast('加载失败')
             }
         }).catch( error => {
            console.log(error)
        })  
		},
		//请求订单数据，并保存到vuex中
		getorderList() {
            this.$axios.get('/data/orderList.json').then( res => {        
             if(res.status === 200) {
                 this.orderList = res.data
                 this.$store.commit("updateOrderList", this.orderList)
             }
             else{
                 Toast('加载失败')
             }
         }).catch( error => {
            console.log(error)
        })  
		},
		
			
	},
	watch: {
		//当为首页时，不显示顶部的返回按钮
			'$route.path': function(path) {
				var p= /^\/home/.test(path)
				var f= /^\/home\/shopDetail/.test(path)
				if(p&&!f) {
					this.flag= false
				}
				else{
					this.flag= true
				}
			}
		}
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
.contain {
 	overflow-x: hidden;
	padding-bottom: 50px;

}
.header {
	width: 100%;
	height: 26px;
	background-color:rgb(4, 175, 255);
	color: aliceblue;
	text-align: center;
	line-height: 26px;
	position: fixed;
	z-index: 999;
}
.header .return {
	float: left;
	margin-left: 7px;
}
.header .return::before {
	content: "<"
}
.header title {
	text-align: center;
	margin-left: 0px;
}
.slide-enter-active, .slide-leave-active {
    transition: opacity .3s;
}
.slide-enter, .slide-leave-active {
    opacity: 0;
}

</style>
