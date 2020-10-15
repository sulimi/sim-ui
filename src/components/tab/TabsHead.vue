<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>

  </div>
</template>
<script>
  export default {
    inject: ['eventBus']
  };
</script>
<style lang="scss" scoped>
  .tabs-head {
    display: flex;
    height: 40px;
    align-items: center;
    .actions-wrapper{
      margin-left: auto;
    }
  }
</style>