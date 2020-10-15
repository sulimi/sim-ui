<template>
  <div class="popover" @click="toggle" ref="popover">
    <div ref="contentWrapper" v-show="visible" class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
          <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    data() {
      return {visible: false};
    },
    methods: {
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper);
        let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      },
      listenToDocument: function () {
        let eventHandler = (e) => {
          if (this.$refs && (this.$refs.triggerWrapper.contains(e.target)|| this.$refs.contentWrapper.contains(e.target))) {
            return;
          }
          this.visible = false;
          document.removeEventListener('click', eventHandler);
          console.log('移除监听document');
        };
        console.log('监听document');
        document.addEventListener('click', eventHandler);
      },
      onShow() {
        setTimeout(() => {
          this.positionContent();
          this.listenToDocument();
        }, 0);
      },
      toggle(even) {
        if (this.$refs.triggerWrapper.contains(even.target)) {
          this.visible = !this.visible;
          if (this.visible === true) {
            this.onShow();
          } else {
            // console.log('关闭2');
          }
        }
      }
    },
  };
</script>
<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    transform: translateY(-100%)
  }
</style>