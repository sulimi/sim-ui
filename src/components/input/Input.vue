<template>
  <div class="wrapper">
    <div class="input-wrapper">
      <input ref="input" v-bind="$attrs" :class="{'error': error}" :value="value" :disabled="disabled"
             :readonly="readonly"
             @change="$emit('change', $event.target.value)"
             @input="$emit('input', $event.target.value)"
             @focus="$emit('focus', $event.target.value)"
             @blur="$emit('blur', $event.target.value)"
      />
      <div class="clear" v-if="clear" @click="clearValue">x</div>
    </div>

    <template v-if="error">
      <g-icon icon="error" class="error-icon"></g-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
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
      },
      clear: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      console.log(this.$refs.input.value);
    },
    methods: {
      clearValue() {
        if (!this.$refs.input.value){return}
        this.$refs.input.value = '';
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/helper";

  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    :not(:last-child) {
      margin-right: .8em;
    }

    .input-wrapper {
      position: relative;


      input {
        height: $button-height;
        border: 1px solid #999999;
        border-radius: $border-radius;
        padding: 0 8px;
        font-size: inherit;

        &:hover {
          border-color: #666;
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 2px #99caff
        }

        &[disabled], &[readonly] {
          border-color: #bbb;
          color: #bbb;
          cursor: not-allowed;
          user-select: none;
        }

        &.error {
          border-color: red;
        }
      }

      .clear {
        position: absolute;
        top: 0;
        right: 1em;
        width: 2em;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

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