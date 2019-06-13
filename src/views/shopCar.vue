<template>
<div>
<div class="shopCar-contain">
    <h3>购物车</h3>
    <div class="shopCar-shop" v-for="(item,index) in shopCar" :key="index">
        <div class="shopCar-storeName">
            <input style="transform: scale(1.5,1.5)" type="checkbox" v-model="item.isSelected" @click="selectOne"/>
            <span>xx治官方旗舰店</span>
        </div>
        <div class="shopCar-shopName">
            <div><img :src="item.img"/></div>
            <div>
                <div class="title">{{item.title}}</div>
                <div class="describe">{{item.describe}}</div>
                <div class="price">¥{{item.price}}</div>
                <table>
                    <tr>
                    <td><span  @click="reduce(index)">-</span></td>
                    <td>{{item.num}}</td>
                    <td><span  @click="add(index)">+</span></td>
                    </tr>
                </table>               
            </div>
        </div>
    </div>
</div>
<div class="shopCar-account">
        <div>全选  <input type="checkbox" v-model="checkAll" @click="selectAll"></div>
        <div>合计:<span class="account-color">{{sum | toFixed(2)}}</span></div>
        <div class="jiesuan">
            结算
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            shopCar: [],
            checkAll: false,
            flag: false
           
        }
    },
    computed:{
        sum(){ //用reduce叠加
            return this.shopCar.reduce((prev,shopCar)=>{
                if(! shopCar.isSelected) return prev;  //如果当前没被选中，就不加当前这一项
                return prev + shopCar.price*shopCar.num;
            },0)
        },
    },
    filters:{  // 这里可以有很多自定义的过滤器
           toFixed(input,param1){   //要有返回值return    这里的this指向的是window  input是指 管道符前面的真实数值
               return '￥'+input.toFixed(param1); //param1是toFixed传递的参数
           }
    },
    methods: {
        getshopCar() {
            this.shopCar= this.$store.state.shopCar
        },
        selectAll() {
            this.shopCar.forEach(item=>item.isSelected = !this.checkAll)
            
        },
        selectOne() {
            this.checkAll = this.shopCar.every(item=>item.isSelected)
        },
        reduce(index) {
            if(this.shopCar[index].num>=0) {
                this.shopCar[index].num--
            }
            else {
                this.shopCar[index].num=0
            }
            return this.shopCar[index].num
        },
        add(index) {
            this.shopCar[index].num++
        }
    },    
    mounted() {
        this.getshopCar()
    }
}
</script>
<style>
.shopCar-contain {
    margin-top: 35px;
    margin-bottom: 66px;
}
.shopCar-shop {
    width: 94%;
    height: 135px;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 10px;
}
.shopCar-storeName {
    padding-top: 10px;
}
.shopCar-shopName {
    display: flex;
    margin-top: 5px;
    justify-content: space-between;
}
.shopCar-shopName img {
    width: 60px;
    height: 60px;
}
.shopCar-shopName table {
    margin-top: 5px;
    border: 1px solid #a8a8a8;
    border-collapse: collapse; 
}
td {
    
    border: 1px solid #a8a8a8;
    width: 30px;
    text-align: center;
}
.shopCar-account {
    width: 100%;
    line-height: 60px;   
    display: flex;
    justify-content: space-between;
    background-color: white;
    position: fixed;
    bottom: 50px;
}
.account-color {
    color: #ff0000; 
}
.shopCar-account .jiesuan {
    width: 100px;
    background-color: #ff1c1c;
    border-radius: 10px;
    text-align: center;
    color: white;
}
</style>

