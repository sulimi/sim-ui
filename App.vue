<template>
  <div id="app">
    <div @click="showToast">
      点我
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading1: true,
        loading2: true,
        message: ''
      };
    },
    methods: {
      showToast(){
        this.$toast('我出现了', {
          position: 'bottom',
          closeButton: {
            text: '关闭',
            callback: () => {
              console.log('用户点击了关闭');
            }
          },
        });
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "src/assets/reset.scss";
  @import "src/assets/helper.scss";


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
    font-size: $font-size;
  }
</style>