<template>
  <div class="row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      gutter: {
        type: [String, Number]
      },
      align: {
        type: String,
        validator(value) {
          return ['left', 'right', 'center'].indexOf(value)>=0;
        }
      }
    },
    mounted() {
      this.$children.forEach((v) => {
        v.gutter = this.gutter;
      });
    },

    computed: {
      rowClass() {
        let {align} = this;
        return [align && `align-${align}`];
      },
      rowStyle() {
        return {
          marginLeft: -this.gutter / 2 + 'px',
          marginRight: -this.gutter / 2 + 'px'
        };
      }
    }
  };
</script>
<style lang="scss" scoped>
  .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }

  }
</style>