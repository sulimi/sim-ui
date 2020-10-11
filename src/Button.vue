<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg class="icon" v-if="icon">
      <use :xlink:href=`#icon-${icon}`></use>
    </svg>
    <div class="slot">
      <slot></slot>
    </div>
  </button>


</template>

<script>
  export default {
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right';
        }
      }
    }
  };
</script>
<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

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

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }
  }


</style>