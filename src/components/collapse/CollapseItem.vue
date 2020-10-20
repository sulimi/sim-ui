<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">
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
      },
      name: {type: String, required: true}
    },
    data() {
      return {
        open: false,
      };
    },
    inject: ['eventBus'],
    mounted() {
      this.eventBus && this.eventBus.$on('onSelected', (names) => {
        if (names.indexOf(this.name) < 0) {
          this.open = false;
        } else {
          this.open = true;
        }
      });
    },
    methods: {
      toggle() {
        if (this.open) {
          this.eventBus && this.eventBus.$emit('removeSelected', this.name);
        } else {
          this.eventBus && this.eventBus.$emit('addSelected', this.name);
        }
      },
    }
  };
</script>
<style lang="scss" scoped>
  .collapse-item {
    width: 100%;
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
      .title:last-child {
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






