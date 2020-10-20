<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">
      <span class="text">{{title}}</span>
      <Icon icon="close" :class="{'open':open}"></Icon>
    </div>
    <div class="content"  :class="{'open':open}">
      <template v-if="open">
        <slot></slot>
      </template>
    </div>
  </div>
</template>
<script>

  import Icon from '../Icon';
  export default {
    components: {Icon},
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
      justify-content: space-between;
      align-items: center;
      padding: 0 8px;
      margin-top: -1px;
      .g-icon{
        fill: #767676;
        width: 0.8em;
        height: 0.8em;
        transition: all .3s;
        &.open{
          transform: rotate(90deg);
        }
      }
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
      color: #767676;
      padding: 0 16px;
      transition: all 0.3s;
      overflow: hidden;
      &.open{
        padding: 16px;
      }
    }
  }
</style>






