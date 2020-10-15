<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>


  </div>
</template>
<script>
  export default {
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (name, vm) => {
        let {left: tabsLeft} = this.$el.getBoundingClientRect();
        let {width,left} = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${left-tabsLeft}px`;
      });
    }
  };
</script>
<style lang="scss" scoped>
  .tabs-head {

    display: flex;
    height: 40px;
    align-items: center;
    position: relative;

    .line {
      position: absolute;
      bottom: 0;
      width: 100px;
      height: 2px;
      background: blue;
      border-radius: 1px;
      transition: left 350ms;
    }

    .actions-wrapper {
      margin-left: auto;
    }
  }
</style>