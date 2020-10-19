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
  let validator = (value) => {
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach(key => {
      if (['span', 'offset'].indexOf(key)<0) {
        valid = false;
      }
    });
    return valid;
  };
  export default {
    props: {
      span: {
        type: [String, Number],
        required:true
      },
      offset: {
        type: [Number,String]
      },
      iPad: {type: Object, validator},
      narrowPc: {type: Object, validator},
      pc: {type: Object, validator},
      widePc: {type: Object, validator},
    },
    mounted() {
      this.gutter = this.$parent.gutter;
    },
    methods:{
      createClasses(spanAndoffsetObj, str=''){
        let array=[]
        if (!spanAndoffsetObj){
          return []
        }
        if (spanAndoffsetObj.span){
          array.push(`col-${str}${spanAndoffsetObj.span}`)
        }
        if (spanAndoffsetObj.offset){
          array.push(`offset-${str}${spanAndoffsetObj.offset}`)
        }
        return array
      }
    },
    computed: {
      colClass() {
        let {span, offset, iPad, narrowPc, pc, widePc,createClasses} = this;
        return [
          ...createClasses({span, offset}),
          ...createClasses(iPad, 'iPad-'),
          ...createClasses(narrowPc,'narrow-pc-'),
          ...createClasses(pc,'pc-'),
          ...createClasses(widePc,'wide-pc-'),
        ];
      },
      colStyle() {
        return {
          paddingLeft: this.$parent.gutter / 2 + 'px',
          paddingRight: this.$parent.gutter / 2 + 'px'
        };
      }
    }
  };
</script>
<style lang="scss" scoped>
  .col {
    //默认手机
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
    //iPad
    @media (min-width: 576px) {
      $class-prefix: col-iPad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-iPad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    //窄PC
    @media (min-width: 768px) {
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
    //正常pc
    @media (min-width: 932px) {
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
    //宽PC
    @media (min-width: 1200px) {
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

    .content {
      height: 100%;
    }
  }

</style>