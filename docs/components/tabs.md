---
title: Tabs - 标签
---
# 标签

<ClientOnly>
<template>
<Container title="类型">
    <template #list>
        <mi-tabs :selected.sync="selectedTab">
            <mi-tabs-head>
                <mi-tabs-item name="tab1"></mi-tabs-item>
                <mi-tabs-item name="tab2" disabled></mi-tabs-item>
                <mi-tabs-item name="tab3"></mi-tabs-item>
                <mi-tabs-item name="tab4"></mi-tabs-item>
            </mi-tabs-head>
            <mi-tabs-body>
                <mi-tabs-pane name="tab1">内容1</mi-tabs-pane>
                <mi-tabs-pane name="tab2">内容2</mi-tabs-pane>
                <mi-tabs-pane name="tab3">内容3</mi-tabs-pane>
                <mi-tabs-pane name="tab4">内容4</mi-tabs-pane>
            </mi-tabs-body>
        </mi-tabs>
    </template>
<template #code>

  ```vue
 <template #list>
    <mi-tabs :selected.sync="selectedTab">
        <mi-tabs-head>
            <mi-tabs-item name="tab1"></mi-tabs-item>
            <mi-tabs-item name="tab2" disabled></mi-tabs-item>
            <mi-tabs-item name="tab3"></mi-tabs-item>
            <mi-tabs-item name="tab4"></mi-tabs-item>
        </mi-tabs-head>
        <mi-tabs-body>
            <mi-tabs-pane name="tab1">内容1</mi-tabs-pane>
            <mi-tabs-pane name="tab2">内容2</mi-tabs-pane>
            <mi-tabs-pane name="tab3">内容3</mi-tabs-pane>
            <mi-tabs-pane name="tab4">内容4</mi-tabs-pane>
        </mi-tabs-body>
    </mi-tabs>
 </template>
 
 
  <script>
  import Tabs from '../../src/components/tab/Tabs.vue';
  import TabsHead from '../../src/components/tab/TabsHead.vue';
  import TabsBody from '../../src/components/tab/TabsBody.vue';
  import TabsItem from '../../src/components/tab/TabsItem.vue';
  import TabsPane from '../../src/components/tab/TabsPane.vue';
  
    export default {
      components: {
      'mi-tabs':Tabs,
       'mi-tabs-head':TabsHead,
       'mi-tabs-body':TabsBody,
       'mi-tabs-item':TabsItem,
       'mi-tabs-pane':TabsPane,
      },
      data() {
        return {
          selectedTab: 'tab1'
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
import Tabs from '../../src/components/tab/Tabs.vue';
import TabsHead from '../../src/components/tab/TabsHead.vue';
import TabsBody from '../../src/components/tab/TabsBody.vue';
import TabsItem from '../../src/components/tab/TabsItem.vue';
import TabsPane from '../../src/components/tab/TabsPane.vue';

  export default {
    components: {
    'mi-tabs':Tabs,
     'mi-tabs-head':TabsHead,
     'mi-tabs-body':TabsBody,
     'mi-tabs-item':TabsItem,
     'mi-tabs-pane':TabsPane,
    },
    data() {
      return {
        selectedTab: 'tab1'
      };
    },
  };
</script>

## API
>TabsHead

|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ----- | ----|
| **name**         | 标题内容  | number/string| - | 是 |
| **disabled** | 禁用状态  | boolean | false | 否 |          

>TabsBody

|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ----- | ----|
| **name**         | 内容对应的标题  | number/string| - | 是 |
 