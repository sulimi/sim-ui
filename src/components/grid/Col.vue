<template>
  <div class="col" :class="colClass"
       :style="colStyle"
  >
    <div class="content">
      <slot></slot>
    </div>

  </div>
</template>
<script>
  export default {
    props: {
      span: {
        type: [String, Number]
      },
      offset: {
        type: Number
      },
      phone: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        }
      },
      iPad: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        }
      },
      narrowPc: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        }
      },
      pc: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        }
      },
      widePc: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        }
      },
    },
    data() {
      return {
        gutter: 0
      };
    },
    mounted() {
      this.gutter = this.$parent.gutter;
    },
    computed: {
      colClass() {
        let {span, offset, phone} = this;
        let phoneClass = []
        if (phone){
          phoneClass=[`col-phone-${phone.span}`]
        }
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ...phoneClass
        ];
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        };
      }
    }
  };
</script>
<style lang="scss">
  .col {
    height: 100px;
    /*width: 50%;*/
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }

//宽PC
    @media (max-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

//正常pc
    @media (min-width: 933px) and (max-width: 1200px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    //窄PC
    @media (min-width: 769px) and (max-width: 992px) {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    //ipad
    @media (min-width: 577px) and (max-width: 786px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    //手机
    @media (max-width: 567px) {
      $class-prefix: col-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    .content {
      height: 100%;
    }
  }

</style>