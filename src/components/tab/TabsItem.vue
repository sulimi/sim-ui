<template>
  <div class="tabs-item" @click="chooseTab" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    inject: ['eventBus'],
    data() {
      return {
        active: false
      };
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      classes() {
        return {active: this.active};
      }
    },
    methods: {
      chooseTab() {
        this.eventBus.$emit('update:selected', this.name);
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      });
    }
  };
</script>
<style lang="scss" scoped>
  .tabs-item {
    cursor: pointer;
    flex-shrink: 0;
    padding: 0 1em;

    &.active {
      background: yellow;
    }
  }
</style>