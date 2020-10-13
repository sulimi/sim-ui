<template>
  <div class="layout" :class="layoutHasSiderClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        layoutHasSiderClass: {hasSider: false}
      };
    },
    mounted() {
      this.$children.forEach((v) => {
        if (v.$options.name === 'isSider') {
          this.layoutHasSiderClass.hasSider = true;
        }
      });
    }
  };
</script>
<style lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    flex: 1;

    &.hasSider {
      flex-direction: row;
      flex: 1;
    }
  }

</style>