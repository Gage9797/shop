<template>
<div>
    <div class="home">
        <nav class="navigation">
            <ul id="nav">
                <li><span class="active"><router-link to="/home">首页</router-link></span></li>
                <li><span><router-link to="/home/food">食品</router-link></span></li>
                <li><span><router-link to="/home/baihuo">百货</router-link></span></li>
                <li><span><router-link to="/home/clean">洗护</router-link></span></li>
                <li><span><router-link to="/home/fresh">生鲜</router-link></span></li>
                <li><span><router-link to="/home/dress">女装</router-link></span></li>
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
        }
    },
    methods: {
        change() {
            var nav= document.getElementById("nav").getElementsByTagName("span")
            for(var i =0;i < nav.length;i++){
                nav[i].onclick = (function(x){
                return function(){
                    for(var j =0;j < nav.length;j++){
                        nav[j].setAttribute("class","none")
                    }
                    nav[x].setAttribute("class","active")
                    }
                })(i)
            }  
        }
    },       
    mounted() {
        this.change()
       
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


