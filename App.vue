<template>
  <div id="app" style="padding-top: 100px;padding-left: 50px">
    <g-popover position="top">
      <template slot="content" slot-scope="{close}">
        <div class="content">
          hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框
        </div>
        <button @click="close">关闭</button>
      </template>
      <g-button>点我出现</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        <div class="content">
          hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框
        </div>
      </template>
      <g-button>点我出现</g-button>
    </g-popover>
    <g-popover position="left">
      <template slot="content">
        <div class="content">
          hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框
        </div>
      </template>
      <g-button>点我出现</g-button>
    </g-popover>
    <g-popover position="right">
      <template slot="content">
        <div class="content">
          hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框
        </div>
      </template>
      <g-button>点我出现</g-button>
    </g-popover>
    <br/>
    <br/>
    <br/>

    <g-popover trigger="hover" position="top">
      <template slot="content">
        <div class="content">
          hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框
        </div>
      </template>
      <g-button>点我出现</g-button>
    </g-popover>
    <g-popover trigger="hover" position="bottom">
      <template slot="content">
        <div class="content">
          hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框
        </div>
      </template>
      <g-button>点我出现</g-button>
    </g-popover>
    <g-popover trigger="hover" position="left">
      <template slot="content">
        <div class="content">
          hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框
        </div>
      </template>
      <g-button>点我出现</g-button>
    </g-popover>
    <g-popover trigger="hover" position="right">
      <template slot="content">
        <div class="content">
          hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框hi，这里是气泡框
        </div>
      </template>
      <g-button>点我出现</g-button>
    </g-popover>
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