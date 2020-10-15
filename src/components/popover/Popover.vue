<template>
  <div class="popover" @click.stop="toggle">
    <div ref="contentWrapper" v-show="visible" class="content-wrapper" @click.stop>
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
      toggle() {
        this.visible = !this.visible;
        if (this.visible === true) {
          document.body.appendChild(this.$refs.contentWrapper);
          let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
          let eventHandler = () => {
            document.removeEventListener('click', eventHandler);
            this.visible = false;
            console.log(1);

          };
          document.addEventListener('click', eventHandler);

        }else {
          console.log(2);
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