<template>
  <div class="toast">
    <slot></slot>
    <span v-if="closeButton">{{closeButton.text}}</span>
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
            callback: (toast) => {
              toast.close();
            }
          };
        }
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    methods: {
      close() {
        this.$el.remove();
        this.$destroy();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .toast {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    line-height: 1.8;
    height: 14px;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    color: #fff;
    padding: 0 16px;
  }

</style>