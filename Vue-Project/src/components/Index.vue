<template>
    <div>
        <!-- {{this.$store.state.count}} -->
        {{count}}
        <button @click='increment'>+</button>
        <button @click='decrement'>-</button>
        <button @click='incrementAsync'>+ aysnc</button>
    </div>
</template>
<script>
    import {mapActions,mapState} from 'vuex';
    export default {
        name:'Index',
        data:function(){
            return {
                number:0
            }
        },
        // ①直接获取store的state
        // computed:{
        //     count:function(){
        //         return this.$store.state.count;
        //     }
        // },
        // ②借助mapState辅助函数，获取store中的state
        computed:mapState([
            'count'
        ]),
        // 将this.increment()映射成this.$store.dispatch('increment')
        methods:mapActions([
            'increment',
            'decrement',
            'incrementAsync'
        ])
        // {
        //     increase:function(){
        //         this.number ++;       
        //     },
        //     decrease:function(){
        //         this.number --;                
        //     }
        // }
    }
</script>
