<template>
  <div class="popover" @click="toggle" ref="popover">
    <div ref="contentWrapper" v-show="visible" class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="trigger">
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
      eventHandler(e) {
        if (this.$refs && (this.$refs.triggerWrapper.contains(e.target) || this.$refs.contentWrapper.contains(e.target))) {
          return;
        }
        this.removeEven();
      },
      showContent() {
        setTimeout(() => {
          this.positionContent();
          document.addEventListener('click', this.eventHandler);
        }, 0);
      },
      removeEven() {
        this.visible = false;
        document.removeEventListener('click', this.eventHandler);
      },
      toggle(even) {
        if (this.$refs.triggerWrapper.contains(even.target)) {
          this.visible = !this.visible;
          if (this.visible === true) {
            this.showContent();
          } else {
            this.removeEven();
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
    .trigger{
      display: inline-block;
    }
  }

  .content-wrapper {
    position: absolute;
    border: 1px solid #333;
    background: #fff;
    border-radius: 4px;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.7));
    transform: translateY(-100%);
    margin-top: -10px;
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before,&::after{
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;
      border: 10px solid transparent;

    }
    &::before{
      top: 100%;
      border-top-color: black;
    }
    &::after{
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }

</style>