<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-html="$slots.default[0]" v-else></div>
    </div>
    <div class="line" ref="line"></div>
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
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0;

        }
      }
    },
    computed: {
      toastClasses() {
        return {[`position-${this.position}`]: true};
      }
    },
    mounted() {
      this.execAutoClose();
      this.updateStyles();
    },
    methods: {
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close();
          }, this.autoCloseDelay * 9000000);
        }
      },
      updateStyles() {
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`;
        });
      },
      close() {
        this.$el.remove();
        this.$destroy();
      },
      onClickFun() {
        this.close();
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback();
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .toast {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    line-height: 1.8;
    min-height: 40px;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    color: #fff;
    padding: 0 16px;
    border-radius: 4px;

    .message {
      padding: 8px 0;
    }

    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }

    .line {
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    &.position-top{
      top: 0;
    }
    &.position-bottom{
      bottom: 0;
    }
    &.position-middle{
      top: 50%;
      transform: translate(-50%);
    }
  }

</style>