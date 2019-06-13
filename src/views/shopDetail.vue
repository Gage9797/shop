<template>
<div>
    <div id="detail-contain">
        <img :src="list.img" alt="商品图片"  @click.stop="fade">
        <div class="title">{{list.title}}</div>
        <div class="describe">{{list.describe}}</div>
        <div class="price">¥{{list.price}}</div>
        <div @click="popup(0)"><cell title="商品规格" content="" right="请选择>"></cell></div>
        <hr/>
        <div @click="popup(1)"><cell title="领劵" content="暂无优惠券" right=">"></cell></div>
        <hr/>
        <div @click="popup(2)"><cell title="优惠" content="暂无优惠" right=">"></cell></div>
        <hr/>
        <div @click="popup(3)"><cell title="运费" content="包邮" right=">"></cell></div>
        <hr/>
        <div @click="popup(4)"><cell title="说明" content="暂无优惠" right=">"></cell></div>
        <hr/>
        <div @click="popup(5)"><cell title="评价" right=">"></cell></div>
        <hr/>
        <div>
        </div>
    </div>
    <div>
        <div class="succ-pop" id="popup0">
            <span class="fade" @click="fade(0)">X</span>
            <h1>弹出来0</h1>
        </div>
        <div class="succ-pop" id="popup1">
            <span class="fade" @click="fade(1)">X</span>
            <h1>弹出来1</h1>
        </div>
        <div class="succ-pop" id="popup2">
            <span class="fade" @click="fade(2)">X</span>
            <h1>弹出来2</h1>
        </div>   
        <div class="succ-pop" id="popup3">
            <span class="fade" @click="fade(3)">X</span>
            <h1>弹出来3</h1>
        </div>
        <div class="succ-pop" id="popup4">
            <span class="fade" @click="fade(4)">X</span>
            <h1>弹出来4</h1>
        </div>
        <div class="succ-pop" id="popup5">
            <span class="fade" @click="fade(5)">X</span>
            <h1>弹出来5</h1>
        </div>   
    </div>
    <car-footer class="car-footer" :index="index"></car-footer>
</div>
</template>
<script>
import cell from '../components/shopDetail/cell.vue'
import carFooter from '../components/shopCar/carFooter.vue'
export default {
    components: {cell,carFooter},
    data() {
        return {
            shopList: "",
            index: "",
            list: "",
            flag: "true"
        }
    },
    methods: {
        getshopList() {
            this.$axios.get('/data/shops.json').then( res => {        
             if(res.status === 200) {
                 this.shopList = res.data
                 this.list = this.shopList[this.index-1]
             }
             else{
                 Toast('加载失败')
             }
         }).catch(function(error){
            console.log(error);
        })  
        },
        popup(i) {
            if(this.flag) {
                this.flag=false;
                document.getElementById("popup"+i).style.display="none";
                document.getElementById("detail-contain").style.filter="none";
            }
            else{
                this.flag=true;
                document.getElementById("popup"+i).style.display="block";
                document.getElementById("detail-contain").style.filter="blur(7px)";
            }            
        },
        fade(i) {
            if(this.flag) {
                this.flag=false;
                document.getElementById("popup"+i).style.display="none";
                document.getElementById("detail-contain").style.filter="none";
            }
        }        
    },
    mounted() {
        this.index=parseInt(this.$route.params.id)
        this.getshopList()
    }
}
</script>
<style>
#detail-contain {
    margin-top: 26px;
    margin-bottom: 50px;
}
hr {
    opacity: 0.5;
}
#detail-contain img {
    width: 100%;
    height: 350px;
}
.succ-pop {
        display: none;
        width: 100%;
        height: 200px;
        background: #fff;
        position: fixed;
        bottom: 50px;
        border-radius: 5px;
        animation:mymove 1s ease 0s 1 normal;
}   

.fade {
    right: 5px;
    opacity: 0.6;
    position: absolute;
    float: right;
}
@keyframes mymove {
        from {bottom:-200px;}
        to {bottom: 50px;}
}
.car-footer {
    position: fixed;
    bottom: 0%;
    z-index: 99;
}
</style>

