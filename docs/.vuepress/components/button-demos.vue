<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button>加载按钮</g-button>
    <g-button>加载按钮</g-button>
    <g-button-group>
      <g-button>上一页</g-button>
      <g-button>下一页</g-button>
    </g-button-group>

    <pre>
      <code>{{content}}</code>
    </pre>

  </div>
</template>
<script>
  import Button from '../../../src/components/button/Button.vue';
  import ButtonGroup from '../../../src/components/button/ButtonGroup.vue';

  export default{
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    },
    data(){
      return {
        a:'jj',
        content: `
        <g-button>默认按钮</g-button>
        <g-button>加载按钮</g-button>
        <g-button>加载按钮</g-button>
        <g-button-group>
          <g-button>上一页</g-button>
          <g-button>下一页</g-button>
        </g-button-group>
        `};
    }
  };
</script>
<style></style>