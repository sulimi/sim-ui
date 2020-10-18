---
title: Input - 输入框
---
# 输入框

<ClientOnly>
<template>
<Container title="类型">
<template #list>
<mi-input value="内容"></mi-input>
<mi-input value="内容" readonly></mi-input>
<mi-input value="内容" disabled></mi-input>
<br />
<br />
<mi-input value="内容" error="请输入合法内容"></mi-input>
</template>
<template #code>

  ```vue
<template>

  <mi-button>普通按钮</mi-button>
  <mi-button disabled>禁用按钮</mi-button>
  <mi-button :loading="true">加载按钮</mi-button>
  <mi-button :loading="loading" @click="loading=!loading">点击加载</mi-button>

  <mi-button icon="jiazaizhong">左图标按钮</mi-button>
  <mi-button icon="jiazaizhong" iconPosition="right">右图标按钮</mi-button>

  <mi-button-group>
    <mi-button>上一页</mi-button>
    <mi-button>主页</mi-button>
    <mi-button>下一页</mi-button>
  </mi-button-group>

</template>
<script>
  export default {
    components: {
        data() {
          return {
            loading: false,
          }
        }
    },
  };
</script>
  ```
</template>
</Container>
</template>
</ClientOnly>



## API
|    参数      | 说明 | 类型 | 默认值 |
| ----------   | ---  | ---- | ------ | 
| **icon**         | 按钮图标  | string | - |
| **iconPosition** | 按钮图标位置，可选值：left,right  | string | left |          
| **loading**      | 设置按钮是否处于加载状态  | boolean | false |
| **disabled**     | 按钮禁用状态  | boolean | false|




<script>
  import Input from '../../src/components/input/Input.vue';
  export default {
    components: {
    'mi-input':Input,
    },
        data() {
          return {
            loading: false,
            }
        }
  };
</script>