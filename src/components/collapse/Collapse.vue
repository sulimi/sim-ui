<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="scss" scoped>
  .collapse{
    border: 1px solid #ddd;
    border-bottom: none;
    border-radius: 4px;
  }
</style>