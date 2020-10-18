<template>
  <div class="layout" :class="layoutHasSiderClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        layoutHasSiderClass: {hasSider: false},
        closeB:false
      };
    },
    mounted(){
      this.$children.forEach((v) => {
        if (v.$options.name === 'isSider') {
          this.layoutHasSiderClass.hasSider = true;
        }
      });
    }
  };
</script>
<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    flex: 1;
    transition: all .5s;
    position: relative;

    &.hasSider {
      flex-direction: row;
      flex: 1;
    }
    button {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

</style>