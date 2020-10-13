<template>
  <div class="row" :style="rowStyle">
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
    },
    computed:{
      rowStyle(){
        return {
          marginLeft: -this.gutter/2 + 'px',
          marginRight: -this.gutter/2 + 'px'
        }
      }
    }
  };
</script>
<style lang="scss">
  .row {
    display: flex;
  }
</style>