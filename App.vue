<template>
  <div id="app" style="padding: 100px">
    <g-collapse :selected.sync="selectedArray">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
{{selectedArray}}
  </div>
</template>

<script>
  import Button from './src/components/button/Button';

  export default {
    components: {Button},
    data() {
      return {
        selectedArray:['1'],
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