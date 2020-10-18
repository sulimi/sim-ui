<template>
<!--    <transition name="slide">-->
      <div class="sider" v-if="visible" ref="sider">
        <slot></slot>
      </div>
<!--    </transition>-->

</template>

<script>
  import Button from '../button/Button';

  export default {
    name: 'isSider',
    components: {Button},
    data() {
      return {
        visible: true
      };
    },
    props: {
      closeButton: {
        type: Boolean,
        default: false
      }
    },
  };
</script>

<style lang="scss" scoped>
  /*.sider {*/
  /*  position: relative;*/
  /*}*/

  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }

/*  .slide-enter, .slide-leave-to {
    margin-left: -100%;
  }*/
</style>