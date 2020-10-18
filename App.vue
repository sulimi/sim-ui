<template>
  <div id="app">

  </div>
</template>

<script>
  import Button from './src/components/button/Button';

  export default {
    components: {Button},
    data() {
      return {
        loading1: true,
        loading2: true,
        message: ''
      };
    },
    methods: {
      showToast() {
        this.$toast(
          {
            text: '提示',
            // position: 'top',
            closeButton: {
              text: '关闭',
              callback: () => {
                console.log('用户点击了关闭');
              }
            },
          }
        );
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "src/assets/reset.scss";
  @import "src/assets/helper.scss";

  %colitem {
    min-height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid red;
  }

  .item {
    @extend %colitem
  }

  html {
    --button-bg: white;
    --button-active-bg: #eee;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
    --box-shadow-color: rgb(0, 0, 0, 0.5)
  }

  #app {
    margin: 20px
  }

  body {
    height: 100vh;
    font-size: $font-size;
  }
</style>