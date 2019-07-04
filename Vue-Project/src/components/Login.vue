<template>
    
    <div>
       <form class="login-form">
            <h2>{{title}}</h2>
            <p>
                账号 <input v-model="account"/>
            </p>
            <p>
                密码 <input v-model="password" type="password"/>
            </p>
    <!-- v-bind:href 缩写成 :href -->
    <!-- v-on:click 缩写成 @click -->
            <button v-on:click="clickHandler" type='button'>登录</button>
        </form> 
        <div class="login-form">
            <p> {{message}}</p>
            <p>  {{reverseMessage}}</p>
        </div>
        <div class="login-form">
            <p>now seconds is {{now}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { loadavg } from 'os';
//   组件注册
  export default {
//   组件名称
    name:'Login',
    // data属性必须是函数
    data:function() {
        return {
            title:'login',
            account:'',
            password:'',
            message:'test message' 
        }
    },
    // 使用计算属性，基于响应式依赖进行缓存
    // 改变dom中的值不会改变对应计算属性？
    // 改变被依赖的属性，对应计算属性会发生改变
    computed: {
        // getter写法
        reverseMessage:function(){
            return this.message.split('').reverse().join('');
        },
        // 由于Date不是响应式数据，因此now的值在vm的本次生命周期内不会改变。
        now:function(){
            return new Date().getSeconds();
        }
    },
    // methods:{
    //     clickHandler:function(){
    //         axios({
    //             method:'post',
    //             url:'http://127.0.0.1:7001/login',
    //             data:{
    //                 account:this.account,
    //                 password:this.password
    //             }
    //         }).then((response)=>{
    //             let res = response.data;
    //             console.log(response);
    //             alert('success?'+res.success);
    //             if(res.success){
    //                 alert('go index')
    //                 this.$router.push('/index');
    //             }
    //         })
    //         alert(  this.account+'：'+this.password);
    //     }
    // }
    methods:{
        clickHandler:async function(){
            let result =await this.$store.dispatch('Login',{account:this.account,password:this.password});
            alert('result in component'+result);
            console.log('result in component',result)
            if(result.success){
                this.$router.push('/index');
            }
        }
    }
  }
</script> 
<style scoped>

.login-form{
    width: 300px;
    padding: 10px;
    margin: 20px auto;
    background-color: #f8f8f8;
    border: 1px solid #ccc;    
}

</style>