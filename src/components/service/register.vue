<template>
    <form>
        <label for="account">用户名:</label>
        <input type="text" v-model="account" id="account">
        <br>
        <label for="password">密码:</label>
        <input type="text" v-model="password" id="password">
        <br>
        <label for="again">密码:</label>
        <input type="text" v-model="again" id="again" @blur="verify">
        <br>
        <button @click.prevent="register">注册</button>
        <div class="tip">{{msg}}</div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            account:'',
            password:'',
            again:'',
            msg:''//接收数据
        }
    },
    methods:{
        verify(){
            var flag = true
            if(this.password!==this.again){            
                this.msg = '两次密码不一致'
                flag = false
                return flag
            }
            return flag
        },
        register(){
            if(this.verify()){
                this.$axios.post('/api/register',{account:this.account,password:this.password})
                .then(result=>{
                    console.log(result)
                    this.msg = result.data.result.msg
                    if(result.data.result.code === 200) {
                       this.$router.push('/person/login') 
                    }
                    
                })
                .catch(err=>{
                
                })
            }
        }
    }
}
</script>
<style>
    .tip {
        color: rgb(255, 2, 2);
        text-align: center;
    }
</style>