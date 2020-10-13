<template>
  <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: ['gutter'],
    mounted() {
      this.$children.forEach((v) => {
        v.gutter = this.gutter;
      });
    }
  };
</script>
<style lang="scss">
  .row {
    display: flex;
  }
</style>