<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickFun">{{closeButton.text}}</span>
  </div>
</template>
<script>
  export default {
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 5
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭',
            callback: () => {
              console.log('点击关闭');
            }
          };
        }
      }
    },
    mounted() {
      // if (this.autoClose) {
      //   setTimeout(() => {
      //     this.close();
      //   }, this.autoCloseDelay * 1000);
      // }
    },
    methods: {
      close() {
        this.$el.remove();
        this.$destroy();
      },
      onClickFun() {
        this.close()
        this.closeButton.callback()
      }
    }
  };
</script>

<style lang="scss" scoped>
  .toast {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    line-height: 1.8;
    height: 40px;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    color: #fff;
    padding: 0 16px;
    border-radius: 4px;

    .close {
      display: flex;
      padding-left: 16px;
    }

    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
  }

</style>