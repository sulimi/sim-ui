<template>
  <div class="wrapper">
    <input :class="{'error': error}" :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <g-icon icon="error" class="error-icon"></g-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/assets/helper.scss";

  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    :not(:last-child){
      margin-right: .8em;
    }


    input {
      height: $button-height;
      border: 1px solid var(--border-color);
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;

      &:hover {
        border-color: var(--border-color-hover);
      }

      &:focus {
        outline: none;
        box-shadow: inset 0 1px 3px var(--box-shadow-color);
      }

      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }

      &.error {
        border-color: red;
      }
    }

    .error-icon {
      fill: red;
    }

    .error-message {
      color: red;
    }
  }
</style>