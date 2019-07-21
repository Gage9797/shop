<template>
<div>
    <div class="home">
        <nav class="navigation">
            <ul id="nav">
                <li><span :class="activeClass==1?'active':''" @click="changeActive(1)"><router-link to="/home">首页</router-link></span></li>
                <li><span :class="activeClass==2?'active':''" @click="changeActive(2)"><router-link to="/home/food">食品</router-link></span></li>
                <li><span :class="activeClass==3?'active':''" @click="changeActive(3)"><router-link to="/home/baihuo">百货</router-link></span></li>
                <li><span :class="activeClass==4?'active':''" @click="changeActive(4)"><router-link to="/home/clean">洗护</router-link></span></li>
                <li><span :class="activeClass==5?'active':''" @click="changeActive(5)"><router-link to="/home/fresh">生鲜</router-link></span></li>
                <li><span :class="activeClass==6?'active':''" @click="changeActive(6)"><router-link to="/home/dress">女装</router-link></span></li>
            </ul>
        </nav> 
    </div>
    <div>
        <router-view></router-view>
    </div>
</div> 
</template>
<script>
export default {
    data() {
        return {
            activeClass: 1,
            isActive1:true
        }
    },
    methods: {
       changeActive(i){
           this.activeClass=i
       }
    }
}
</script>
<style>
.navigation {
    width: 100%;
    background-color:#57ace8;
    color: white;
    text-align: center;
    line-height: 30px;
}
.navigation a, .navigation a:active {
    color: white;
}
.navigation li{
    list-style: none;
	display: inline-block;
}
.navigation span{
    border-bottom: 2px solid #57ace8;
}
li .active{
    color: #fee009;
    border-bottom: 2px solid white;
    font-size: 19px;
}
.navigation li + li::before {
    content: '';
    font-size: 0;
    padding:10px 3px 1px;
    margin-left: 6px;
    border-left: 1px solid rgb(95, 95, 95);
}
.home {
    margin-top: 26px;
}
.view {
    margin-top: 100px;
}
</style>


