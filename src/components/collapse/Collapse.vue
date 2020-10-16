<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: String,

    },
    data() {
      return {
        eventBus: new Vue()
      };
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    },
    mounted() {
      this.eventBus.$emit('openitem', this.selected);
    }
  };
</script>
<style lang="scss" scoped>
  .collapse {
    border: 1px solid #ddd;
    border-bottom: none;
    border-radius: 4px;
  }
</style>