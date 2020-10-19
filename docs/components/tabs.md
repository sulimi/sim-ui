---
title: Tabs - 标签
---
# 标签

<ClientOnly>
<template>
<Container title="类型">
    <template #list>
        <s-tabs :selected.sync="selectedTab">
            <s-tabs-head>
                <s-tabs-item name="tab1"></s-tabs-item>
                <s-tabs-item name="tab2" disabled></s-tabs-item>
                <s-tabs-item name="tab3"></s-tabs-item>
                <s-tabs-item name="tab4"></s-tabs-item>
            </s-tabs-head>
            <s-tabs-body>
                <s-tabs-pane name="tab1">内容1</s-tabs-pane>
                <s-tabs-pane name="tab2">内容2</s-tabs-pane>
                <s-tabs-pane name="tab3">内容3</s-tabs-pane>
                <s-tabs-pane name="tab4">内容4</s-tabs-pane>
            </s-tabs-body>
        </s-tabs>
    </template>
<template #code>

  ```vue
 <template #list>
    <s-tabs :selected.sync="selectedTab">
        <s-tabs-head>
            <s-tabs-item name="tab1"></s-tabs-item>
            <s-tabs-item name="tab2" disabled></s-tabs-item>
            <s-tabs-item name="tab3"></s-tabs-item>
            <s-tabs-item name="tab4"></s-tabs-item>
        </s-tabs-head>
        <s-tabs-body>
            <s-tabs-pane name="tab1">内容1</s-tabs-pane>
            <s-tabs-pane name="tab2">内容2</s-tabs-pane>
            <s-tabs-pane name="tab3">内容3</s-tabs-pane>
            <s-tabs-pane name="tab4">内容4</s-tabs-pane>
        </s-tabs-body>
    </s-tabs>
 </template>
 
 
  <script>
  import Tabs from '../../src/components/tab/Tabs.vue';
  import TabsHead from '../../src/components/tab/TabsHead.vue';
  import TabsBody from '../../src/components/tab/TabsBody.vue';
  import TabsItem from '../../src/components/tab/TabsItem.vue';
  import TabsPane from '../../src/components/tab/TabsPane.vue';
  
    export default {
      components: {
      's-tabs':Tabs,
       's-tabs-head':TabsHead,
       's-tabs-body':TabsBody,
       's-tabs-item':TabsItem,
       's-tabs-pane':TabsPane,
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
    's-tabs':Tabs,
     's-tabs-head':TabsHead,
     's-tabs-body':TabsBody,
     's-tabs-item':TabsItem,
     's-tabs-pane':TabsPane,
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
 