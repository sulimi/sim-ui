<template>
  <div id="app">
    <g-row class="wrapper">
      <g-col class="demo" span="12" offset="10"
             :iPad="{span:8, offset:10}"
             :narrowPc="{span:8, offset:10}"
             :pc="{span:8, offset:10}"
             :widePc="{span:8, offset:10}"></g-col>
    </g-row>
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
    background: yellow;
  }

  .demo {
    border: 1px solid red;
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