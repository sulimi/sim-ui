<template>
  <div class="tabs-item" @click="chooseTab" :class="classes" :data-name="name"><!--data-name是方便测试加的-->
    {{name}}
  </div>
</template>
<script>
  export default {
    name: 'Tags-item',
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
        return {
          active: this.active,
          disabled: this.disabled
        };
      }
    },
    methods: {
      chooseTab() {
        if (this.disabled) {
          return;
        }
        this.eventBus.$emit('update:selected', this.name, this);
        this.$emit('click',this)
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name, vm) => {
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
    height: 100%;
    display: flex;
    align-items: center;

    &.disabled {
      color: #bbbbbb;
      cursor: not-allowed;
    }

    &.active {
      color: #3eaf7c;
      font-weight: bold;
    }
  }
</style>