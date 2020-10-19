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
    name:'tabs-head',
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (name, vm) => {
        let {left: tabsLeft} = this.$el.getBoundingClientRect();
        let {width,left} = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${left-tabsLeft-window.scrollX}px`;
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
    border-bottom: 1px solid #ddd;

    .line {
      position: absolute;
      bottom: 0;
      width: 100px;
      height: 2px;
      background: #3eaf7c;
      border-radius: 1px;
      transition: left 350ms;
    }

    .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>