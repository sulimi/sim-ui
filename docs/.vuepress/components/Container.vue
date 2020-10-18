<template>
  <div class="wrapper">
    <div class="header">
      <h2>{{title}}</h2>
      <Button @click="open=!open">查看代码</Button>
    </div>
    <hr/>
    <div class="content">
      <h6>例子</h6>
      <div class="list">
        <slot name="list"></slot>
      </div>
    </div>
    <div class="code" :class="{open}">
      <slot name="code" v-show="open"></slot>
    </div>
  </div>
</template>
<script>
  import Button from '../../../src/components/button/Button.vue';
  export default {
    name: 'Container',
    components: {Button},
    data() {
      return {
        open: false
      };
    },
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "src/assets/reset.scss";

  .header {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h4 {
      border-bottom: none;
    }
  }

  .content {
    margin: 16px 0;
    border: 1px solid #dfe2e5;
    /*height: 100px;*/
    position: relative;

    h6 {
      position: absolute;
      left: 0;
      top: 0;
      padding: 4px;
      background: #999999;
      display: inline-flex;
      color: #fff;
      justify-content: center;
      align-items: center;
    }

    .list {
      padding: 50px 30px 30px;
    }
  }
  .code{
    max-height: 0;
    border-radius: 6px;
    overflow: hidden;
    transition: all .6s;
    &.open{
      max-height: 1000px;
    }
  }
</style>