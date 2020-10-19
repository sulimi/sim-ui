---
title: Button - 按钮
---
# 按钮

<ClientOnly>
<template>
<Container title="基础">
    <template #list>
        <s-button>普通按钮</s-button>
        <s-button disabled>禁用按钮</s-button>
        <s-button :loading="true">加载中</s-button>
        <s-button :loading="loading" @click="loading=!loading">{{loading?'加载中':'点击加载'}}</s-button>
    </template>
<template #code>

  ```vue
<template>
    <s-button>普通按钮</s-button>
    <s-button disabled>禁用按钮</s-button>
    <s-button :loading="true">加载按钮</s-button>
    <s-button :loading="loading" @click="loading=!loading">点击加载</s-button>
</template>


<script>
  import Button from '../../src/components/button/Button.vue';
  import ButtonGroup from '../../src/components/button/ButtonGroup.vue';
    export default {
      components: {
        's-button':Button,
        's-button-group':ButtonGroup,
      },
      data() {
        return {
          loading: false,
        }
      }
    };
</script>
  ```
</template>
</Container>
</template>


<template>
<Container title="有图标">
    <template #list>
        <s-button icon="jiazaizhong">左图标按钮</s-button>
        <s-button icon="jiazaizhong" iconPosition="right">右图标按钮</s-button>
    </template>
<template #code>

  ```vue
<template>
    <s-button icon="jiazaizhong">左图标按钮</s-button>
    <s-button icon="jiazaizhong" iconPosition="right">右图标按钮</s-button>
</template>


<script>
  import Button from '../../src/components/button/Button.vue';
  import ButtonGroup from '../../src/components/button/ButtonGroup.vue';
    export default {
      components: {
        's-button':Button,
        's-button-group':ButtonGroup,
      },
    };
</script>
  ```
</template>
</Container>
</template>


<template>
<Container title="组合">
    <template #list>
        <s-button-group>
            <s-button>上一页</s-button>
            <s-button>主页</s-button>
            <s-button>下一页</s-button>
        </s-button-group>
    </template>
<template #code>

  ```vue
<template>
    <s-button-group>
      <s-button>上一页</s-button>
      <s-button>主页</s-button>
      <s-button>下一页</s-button>
    </s-button-group>
</template>


<script>
  import Button from '../../src/components/button/Button.vue';
  import ButtonGroup from '../../src/components/button/ButtonGroup.vue';
    export default {
      components: {
         's-button':Button,
         's-button-group':ButtonGroup,
      },
    };
</script>
  ```
</template>
</Container>
</template>

</ClientOnly>




<script>
  import Button from '../../src/components/button/Button.vue';
  import ButtonGroup from '../../src/components/button/ButtonGroup.vue';
  export default {
    components: {
    's-button':Button,
    's-button-group':ButtonGroup,
    },
        data() {
          return {
            loading: false,
            }
        }
  };
</script>



## API
|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ------ |  ----|
| **icon**         | 按钮图标  | string | - | 否 |
| **iconPosition** | 按钮图标位置，可选值：left,right  | string | left | 否 |
| **loading**      | 设置按钮是否处于加载状态  | boolean | false | 否 |
| **disabled**     | 按钮禁用状态  | boolean | false| 否 |


