<template>
  <div id="app">
    <div style="border: 1px solid black;">
      <g-row gutter="10">
        <g-col span="2"></g-col>
        <g-col span="4"></g-col>
        <g-col span="6"></g-col>
        <g-col span="12"></g-col>
      </g-row>
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
  };
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
    --box-shadow-color: rgb(0, 0, 0, 0.5)
  }

  #app {
    margin: 20px
  }

  body {
    font-size: $font-size;
  }
</style>