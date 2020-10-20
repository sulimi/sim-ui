<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true,'disabledHave':disabledHave}"
          @click="$emit('click')">
    <g-icon class="icon loading" icon="jiazaizhong" v-if="loading"></g-icon>
    <g-icon class="icon" :icon="icon" v-if="icon&&!loading"></g-icon>
    <div class="slot">
      <slot></slot>
    </div>
  </button>


</template>

<script>
  import Icon from '../Icon.vue';

  export default {
    components: {
      'g-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right';
        }
      }
    },
    computed: {
      disabledHave() {
        return this.$attrs.hasOwnProperty('disabled');
      }
    },
  };
</script>
<style lang="scss" scoped>

  @keyframes g-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .g-button {
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    padding: 1em;
    margin: 6px;
    border-radius: 4px;
    border: 1px solid #999;
    background: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;

    &.disabledHave {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;

      .icon {
        fill: #bbb
      }
    }

    .icon {
      order: 1;
      margin-right: .3em
    }

    .slot {
      order: 2;
    }


    &.icon-right {
      .icon {
        order: 2;
        margin-left: .3em;
        margin-right: 0
      }

      .slot {
        order: 1;
      }
    }

    .loading {
      animation: g-spin 1s infinite linear;
    }


    &:hover {
      border-color: #666;
    }

    &:active {
      background-color: #eee;
    }

    &:focus {
      outline: none;
    }
  }


</style>