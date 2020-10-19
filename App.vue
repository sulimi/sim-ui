<template>
  <div id="app">

  </div>
</template>

<script>

  export default {

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
    height: 100vh;
    font-size: $font-size;
  }
</style>