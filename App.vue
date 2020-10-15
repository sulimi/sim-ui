<template>
  <div id="app">
    <g-tabs :selected.sync="selectedTab" >
      <g-tabs-head>
        <template slot="actions"><button>设置</button></template>
        <g-tabs-item name="woman" disabled>美女</g-tabs-item>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
        <g-tabs-item name="military">军事</g-tabs-item>
      </g-tabs-head>

      <g-tabs-body>
        <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
        <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
        <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
        <g-tabs-pane name="military">军事相关资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
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
        message: '',
        selectedTab: 'sports'
      };
    },
    methods: {
      showToast() {
        this.$toast('我出间分厘圣诞节分厘卡记录卡就科技的发达的空间分厘卡电视机发卡的现了', {
          // position: 'middle',
          closeButton: {
            text: '关闭',
            callback: () => {
              // console.log('用户点击了关闭');
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
    height: 100vh;
    font-size: $font-size;
  }
</style>