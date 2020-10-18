<template>
  <div>
    <button @click="middleFunt">中间弹出</button>

    <g-button @click="topFunt">上方弹出</g-button>

    <g-button @click="bottonFunt">下方弹出</g-button>

  </div>
</template>
<script>
  import Vue from 'vue'
  import plugin from '../../../src/plugin.js';
  import Toast from '../../../src/components/toast/Toast.vue';
  import Button from '../../../src/components/button/Button.vue';
  Vue.use(plugin)
  export default {
    name:'toast-demo',
    components: {
      'g-toast': Toast,
      'g-button':Button
    },
    methods:{
      middleFunt(){
        this.$toast({ text:'我是提示',position: 'middle'})
      },
      topFunt(){
        this.$toast({text:'我是提示'})
      },
      bottonFunt(){
        this.$toast({ text:'我是提示',position: 'bottom'})
      }
    }
  };
</script>
<style></style>