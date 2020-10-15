<template>
  <div id="app">
    <div style="height:60px;border: 10px solid blue;"></div>
    <div >
      <div style="overflow: hidden;width: 100px;height: 100px;border: 1px solid red;">
        <g-popover>

          <template slot="content">
            <div class="content">hi，这里是气泡框</div>
          </template>
          <button>点我出现</button>
        </g-popover>
      </div>
    </div>
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

  .content {
    width: 100px;
    height: 100px;
    border: 1px solid #666666;
    overflow: hidden;
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