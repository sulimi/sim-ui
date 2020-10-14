<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      sider
      <slot></slot>
      <button @click="visible=false">关闭</button>
    </div>
  </transition>
</template>

<script>
  import Button from '../button/Button';

  export default {
    name: 'isSider',
    components: {Button},
    data(){
      return{
        visible: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;

    button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
</style>