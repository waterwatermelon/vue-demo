import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import  {login} from '@/api/login'   
Vue.use(Vuex);

const state = {
    count:0, 
}
//  functions
//  mutations 必须是同步函数
const mutations = {
    // 事件类型type 回调函数handler
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }
// functions
// action 负责提交mutations，负责执行异步操作
// 分发actions。通过store.dispatch('type')来分发
const actions = {
    // 写法①
    // store.commit('type')该函数会触发对应type的mutations
    increment: (context)=>{ context.commit('increment')},
    // 写法②
    // increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    // 异步操作
    incrementAsync:(context)=>{
        setTimeout(()=>{
            context.commit('increment')  
        },1000)
    },
    Login:async function(context,user){ 
        let result;
        result = await login(user);
        // result = await axios({
        //     method:'post',
        //     url:'http://127.0.0.1:7001/login',
        //     data:user
        // });
        alert('result in action'+result)
        console.log('result in action',result)
        return result;
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    // getters
})