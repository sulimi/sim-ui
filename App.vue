<template>
  <div id="app">
    <g-layout class="wrapper">
      <g-sider class="sider" :close-button="true">lkjlkhlkhlj</g-sider>

      <g-layout class="inside">
        <g-header class="header"></g-header>
        <g-content class="content"></g-content>
        <g-footer class="footer"></g-footer>
      </g-layout>


    </g-layout>
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
  };
</script>

<style lang="scss">
  @import "src/assets/reset.scss";
  @import "src/assets/helper.scss";

  .wrapper {
    height: 500px;
    border: 1px solid #333333;
    .sider {
      min-width: 150px;
      background: #999999;
/*      &.fade-enter, &.fade-leave-to{
        margin-left: -150px;

      }*/
    }
    .inside{
      .header{
        background: #3eaf7c;
        height: 100px;
      }
      .content{

      }
      .footer{
        background: #666666;
        height: 50px;
      }
    }
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
    font-size: $font-size;
  }
</style>