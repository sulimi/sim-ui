---
title: Button - 按钮
---
# 按钮

<ClientOnly>
<template>
<Container title="基础">
    <template #list>
        <button>普通按钮</button>
        <s-button>普通按钮</s-button>
        <s-button disabled>禁用按钮</s-button>
        <s-button :loading="true">加载中</s-button>
        <s-button :loading="loading" @click="loading=!loading">{{loading?'加载中':'点击加载'}}</s-button>
    </template>
<template #code>

  ```vue
<template>
    <Button>普通按钮</Button>
    <Button disabled>禁用按钮</Button>
    <Button :loading="true">加载按钮</Button>
    <Button :loading="loading" @click="loading=!loading">点击加载</Button>
</template>


<script>
import {Button} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
    export default {
      components: {Button},
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
        <s-button icon="error">左图标</s-button>
        <s-button icon="error" iconPosition="right">右图标</s-button>
    </template>
<template #code>

  ```vue
<template>
    <Button icon="error">左图标</Button>
    <Button icon="error" iconPosition="right">右图标</Button>
</template>


<script>
import {Button} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
    export default {
      components: {Button},
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
    <ButtonGroup>
      <Button>上一页</Button>
      <Button>主页</Button>
      <Button>下一页</Button>
    </ButtonGroup>
</template>


<script>
import {Button,ButtonGroup} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
    export default {
      components: {
         Button,
         ButtonGroup},
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
