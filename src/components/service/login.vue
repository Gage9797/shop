<template>
    <form>
        <label for="account">用户名:</label>
        <input type="text" v-model="account" id="account">
        <br>
        <label for="password">密码:</label>
        <input type="text" v-model="password" id="password">
        <br>
        <button @click.prevent="login">登录</button>
        <button>
            <router-link to="/person/register">注册</router-link>
        </button>
        <div class="tip">{{msg}}</div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            account:'',
            password:'',
            msg:''//接收数据
        }
    },
    methods:{
        login(){
            this.$axios.post('/api/login',{account:this.account,password:this.password})
            .then(result=>{
                var _this = this
                this.msg = result.data.result.msg
                //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
                localStorage.setItem("Flag", "isLogin"),
                localStorage.setItem("userinfo", this.account)
                
                if(result.data.result.code === 200) {setTimeout(function () {
                    _this.$router.push('/person')
                },800);
                }
        
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style>
    form {
        margin-top: 70px;
    }
    .tip {
        color: rgb(255, 2, 2);
        text-align: center;
    }
</style>
