<template>
<div class="person-contain">
    <div class="person" v-for="item in person" :key="item.id">
        <div class="touxiang">
            <img :src="item.img"/>
        </div>
    </div>
    <div class="person-name">
        <div>用户名：xx治</div>
        <div>账号：{{userinfo}}</div>
        <div v-if="login">
        <button @click="quit">退出登录</button>
        </div>
     </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            person: [],
            getFlag: 'true',
            login: 'false',
            userinfo: ''
        }
    },
    methods: {
        getPerson() {
            this.$axios.get('/data/person.json').then( res => {        
             if(res.status === 200) {
                 this.person = res.data
             }
             else{
                 Toast('加载失败')
             }
         }).catch(function(error){
            console.log(error)
        })  
        },
        change() {
        //判断是否已经登录成功
            if(localStorage.getItem("Flag") === "isLogin"){
                this.getFlag = false,
                this.login = true,
                this.userinfo = localStorage.getItem("userinfo")
            }
        },
         //清除登录状态
        quit() {  
            localStorage.removeItem("Flag")
            this.$router.push('/person/login')
            }
        },
    mounted() {
        this.getPerson()
        this.change()
    }    
}
</script>
<style>
.person-contain {
    margin-top: 60px;
}
.touxiang {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    overflow: hidden;
}
.touxiang img {
    width: 100px;
    height: 100px;
}
.person-name {
    margin-top: 30px;
    text-align: center;
}
.person-name div {
    margin-top: 15px;
}
</style>

