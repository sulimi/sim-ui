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

    <g-input></g-input>
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
  @import "src/assets/helper.scss";
  @import "src/assets/reset.scss";
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666
  }

  #app {
    margin: 20px
  }

  body {
    font-size: var(--font-size);
  }
</style>