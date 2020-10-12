<template>
  <div id="app">
    <g-button icon="arrow">按钮</g-button>
    <g-button>按钮</g-button>
    <g-button icon="arrow" icon-position="right">按钮</g-button>

    <g-button-group>
      <g-button>上一页</g-button>
      <g-button>中间</g-button>
      <g-button>中间</g-button>
      <g-button>中间</g-button>
      <g-button>下一页</g-button>
    </g-button-group>
    <g-input value="正常" ></g-input>
    <g-input value="禁用" disable></g-input>
    <g-input value="只读" readonly></g-input>
    <g-input value="正常" error="姓名不能少于两个字"></g-input>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        loading1: true,
        loading2: true
      }
    },
  }
</script>

<style lang="scss">
  @import "src/assets/reset.scss";
  @import "src/assets/helper.scss";

  html {
    --button-bg: white;
    --button-active-bg: #eee;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
    --box-shadow-color: rgb(0,0,0,0.5)
  }

  #app {
    margin: 20px
  }

  body {
    font-size: $font-size;
  }
</style>