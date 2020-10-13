<template>
  <div class="col" :class="[span&&`col-${span}`,offset&&`offset-${offset}`]"
       :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}"
  >
    <div class="content">
      <slot></slot>
    </div>

  </div>
</template>
<script>
  export default {
    props: ['span', 'offset'],
    data() {
      return {
        gutter: 0
      };
    },
    mounted() {
      this.gutter = this.$parent.gutter;
    },
  };
</script>
<style lang="scss">
  .col {
    height: 100px;
    width: 50%;
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
    .content{
      background: yellow;
      border: 1px solid red;
      height: 100%;
    }
  }

</style>