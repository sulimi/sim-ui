---
title: Collapse - 折叠面板
---
# 折叠面板


<ClientOnly>
<template>
<Container title="基础">
<template #list>
    <mi-collapse :selected.sync="selectedArray">
        <mi-collapse-item title="标题1" name="1">内容1</mi-collapse-item>
        <mi-collapse-item title="标题2" name="2">内容2</mi-collapse-item>
        <mi-collapse-item title="标题3" name="3">内容3</mi-collapse-item>
    </mi-collapse>
</template>
<template #code>

```vue
 <template>
    <mi-collapse :selected.sync="selectedArray">
        <mi-collapse-item title="标题1" name="1">内容1</mi-collapse-item>
        <mi-collapse-item title="标题2" name="2">内容2</mi-collapse-item>
        <mi-collapse-item title="标题3" name="3">内容3</mi-collapse-item>
    </mi-collapse>
 </template>
    <script>
    import Collapse from '../../src/components/collapse/Collapse.vue';
    import CollapseItem from '../../src/components/collapse/CollapseItem.vue';

      export default {
        components: {
        'mi-collapse':Collapse,
        'mi-collapse-item':CollapseItem,
        },
        data() {
          return {
            selectedArray:['1'],
          };
        },
      };
    </script>
  ```
</template>
</Container>
</template>

<template>
<Container title="支持单项">
<template #list>
    <mi-collapse :selected.sync="selectedArray" :single="true">
        <mi-collapse-item title="标题1" name="1">内容1</mi-collapse-item>
        <mi-collapse-item title="标题2" name="2">内容2</mi-collapse-item>
        <mi-collapse-item title="标题3" name="3">内容3</mi-collapse-item>
    </mi-collapse>
</template>
<template #code>

```vue
 <template>
    <mi-collapse :selected.sync="selectedArray" :single="true">
        <mi-collapse-item title="标题1" name="1">内容1</mi-collapse-item>
        <mi-collapse-item title="标题2" name="2">内容2</mi-collapse-item>
        <mi-collapse-item title="标题3" name="3">内容3</mi-collapse-item>
    </mi-collapse>
 </template>
    <script>
    import Collapse from '../../src/components/collapse/Collapse.vue';
    import CollapseItem from '../../src/components/collapse/CollapseItem.vue';

      export default {
        components: {
        'mi-collapse':Collapse,
        'mi-collapse-item':CollapseItem,
        },
        data() {
          return {
            selectedArray:['1'],
          };
        },
      };
    </script>
  ```
</template>
</Container>
</template>

</ClientOnly>


<script>
import Collapse from '../../src/components/collapse/Collapse.vue';
import CollapseItem from '../../src/components/collapse/CollapseItem.vue';

  export default {
    components: {
    'mi-collapse':Collapse,
    'mi-collapse-item':CollapseItem,
    },
    data() {
      return {
         selectedArray:['1'],
      };
    },
  };
</script>



## API
>Collapse

|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ----- | ----|
| **selected**     | 默认展开项  | array| - | 否 |
| **single** | 单项展开  | boolean | false | 否 |

>CollapseItem

|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ----- | ----|
| **title**         | 展开项标题  | string| - | 是 |
| **name**         | 所有项标识  | string| - | 是 |
