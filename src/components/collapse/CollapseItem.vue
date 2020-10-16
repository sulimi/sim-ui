<template>
  <div class="collapse-item">
    <div class="title" @click="open=!open">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data(){
      return {
        open: false
      }
    }
  };
</script>
<style lang="scss" scoped>
  .collapse-item {

    .title {
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      margin-top: -1px;
    }

    &:first-child {
      .title {
        border-top: none;
      }
    }
    &:last-child {
      .title:last-child{
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      .content {
        border-bottom: 1px solid #ddd;
        border-radius: 4px;
      }
    }

    .content {
      padding: 16px;
    }
  }
</style>






