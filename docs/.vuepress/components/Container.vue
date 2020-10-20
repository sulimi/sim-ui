<template>
  <div class="wrapper">
    <div class="header">
      <h3>{{title}}</h3>
      <div class="btn-wrapper">
        <div class="icon-i">
          <Icon icon="close" :class="{'open':open}"></Icon>
        </div>
        <Button @click="open=!open" class="btn">查看代码</Button>
      </div>
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
  import Icon from '../../../src/components/Icon.vue';
  export default {
    name: 'Container',
    components: {Icon, Button},
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
  .header {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      border-bottom: none;
    }
    .btn-wrapper{
      background: #3eaf7c;
      border-radius: 4px;
      border: 1px solid #bbbbbb;
      display: flex;
      align-items: center;
      justify-content: center;

      .btn{
        background: #3eaf7c;
        color: #fff;
        border: none;
        margin: 0;
        padding-left: 0;
      }
      .icon-i{
        fill: #fff;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        .g-icon{
          width: 0.8em;
          height: 0.8em;
          transition: all .6s;
          &.open{
            transform: rotate(90deg);
          }
        }
      }
    }
  }

  .content {
    margin: 16px 0;
    border: 2px solid #3eaf7c;
    position: relative;


    h6 {
      position: absolute;
      left: 0;
      top: 0;
      padding: 4px;
      background: #3eaf7c;
      display: inline-flex;
      color: #fff;
      justify-content: center;
      align-items: center;
      margin: 0;
    }

    .list {
      padding: 50px 30px 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }
  .code{
    max-height: 0;
    border-radius: 6px;
    overflow: hidden;
    transition: all .6s;
    &.open{
      max-height: 5000px;
    }
  }
</style>