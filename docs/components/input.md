---
title: Input - 输入框
---
# 输入框

<ClientOnly>
<template>
<Container title="基础">
    <template #list>
        <s-input placeholder="请输入内容"></s-input>
        <s-input placeholder="只读" readonly></s-input>
        <s-input placeholder="禁用" disabled></s-input>
    </template>
<template #code>

  ```vue
<template>
      <Input placeholder="请输入内容"></Input>
      <Input readonly placeholder="只读"></Input>
      <Input disabled placeholder="禁用"></Input>
</template>



<script>
import {Input} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
  export default {
    components: {Input},
   };
</script>
  ```
</template>
</Container>
</template>


<template>
<Container title="双向绑定">
    <template #list>
        <s-input  placeholder="请输入内容" v-model="value"></s-input>
        <span style="padding-left: 1em">展示：{{value}}</span>
    </template>
<template #code>

  ```vue
<template>
  <Input v-model="value" placeholder="请输入内容"></Input>
</template>


<script>
import {Input} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
  export default {
    components: {Input},
      data() {
        return {
          value: '双向绑定',
        }
      }
    };
</script>
  ```
</template>
</Container>
</template>


<template>
<Container title="错误提示">
    <template #list>
        <s-input  placeholder="请输入内容" value="错误的内容" error="输入错误"></s-input>
    </template>
<template #code>

  ```vue
<template>
   <Input error="输入错误" placeholder="请输入内容" value="错误的内容"></Input>
</template>


<script>
import {Input} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
  export default {
    components: {Input},
   };
</script>
  ```
</template>
</Container>
</template>


<template>
<Container title="一键清空">
    <template #list>
        <s-input  :clear="true" placeholder="请输入内容" value="不想要了"></s-input>
    </template>
<template #code>

  ```vue
<template>
  <Input  :clear="true" placeholder="请输入内容" value="不想要了"></Input>
</template>


<script>
import {Input} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
    export default {
      components: {Input},
    };
</script>
  ```
</template>
</Container>
</template>

</ClientOnly>



### API

>支持原生input属性

|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ------ |  ----|
| **readonly**         | 改良后的只读输入框  | boolean | false | 否 |
| **disabled** | 改良后的禁用输入框  | boolean | false | 否 |
| **error**      | 标识错误提示框，并提示错误信息  | string | - | 否 |
| **clear**     | 添加一键清空按钮  | boolean | false| 否 |




<script>
  import Input from '../../src/components/input/Input.vue';
  export default {
    components: {
    's-input':Input,
    },
        data() {
          return {
            value: '双向绑定',
            }
        }
  };
</script>