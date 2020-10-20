<template>
  <svg class="g-icon">
    <use :xlink:href=`#icon-${icon}`></use>
  </svg>
</template>

<script>
  import '../../public/svg.js';

  export default {
    name:'Icon',
    props: {
      icon: {
        type: String
      }
    }
  };
</script>

<style lang="scss" scoped>
  .g-icon {
    width: 1em;
    height: 1em;
  }
</style>