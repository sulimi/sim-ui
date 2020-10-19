<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-html="$slots.default[0]" v-else></div>
      </div>
      <div class="line" ref="line" v-if="closeButton"></div>
      <span class="close" v-if="closeButton" @click="onClickFun">{{closeButton.text}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 2,
        validator (value) {
          return value === false || typeof value === 'number';
        }
      },
      content:{
        type:String,
        required: true
      },
      // type:{
      //   type:String,
      //   default: 'normal',
      //   validator(value){
      //     return ['normal','warning', 'info', 'error','success'].indexOf(value) >= 0;
      //   }
      // },
      closeButton: {
        type: Object,
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
          }, this.autoClose * 1000);
        }
      },
      updateStyles() {
        this.$nextTick(() => {

          this.$refs.line?this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`:'';
        });
      },
      close() {
        // console.log('调用了关闭函数');
        this.$el.remove();
        this.$emit('close');
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
  $animation-duration: 1s;

  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;

    &.position-top {
      top: 1vh;

      .toast {
        animation: slide-down $animation-duration;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }

    &.position-bottom {

      bottom: 1vh;

      .toast {
        animation: slide-up $animation-duration;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &.position-middle {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);

      .toast {
        animation: fade-in $animation-duration;
      }
    }
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100%)
    }
    100% {
      opacity: 1;
      transform: translateY(0%)
    }
  }

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-100%)
    }
    100% {
      opacity: 1;
      transform: translateY(0%)
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .toast {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 1.8;
    min-height: 40px;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    color: #fff;
    padding: 0 16px;
    border-radius: 4px;

    .message {
      padding: 8px 0;
    }

    .close {
      padding-left: 16px;
      flex-shrink: 0;
      cursor: pointer;
    }

    .line {
      border-left: 1px solid #666;
      margin-left: 16px;
    }
  }

</style>