---
title: Button - 按钮
---
# 按钮

<ClientOnly>
<template>
<Container title="基础">
<template #list>
<mi-button>普通按钮</mi-button>
<mi-button disabled>禁用按钮</mi-button>
<mi-button :loading="true">加载中</mi-button>
<mi-button :loading="loading" @click="loading=!loading">{{loading?'加载中':'点击加载'}}</mi-button>
</template>
<template #code>

  ```vue
<template>
    <mi-button>普通按钮</mi-button>
    <mi-button disabled>禁用按钮</mi-button>
    <mi-button :loading="true">加载按钮</mi-button>
    <mi-button :loading="loading" @click="loading=!loading">点击加载</mi-button>
</template>
<script>
    export default {
      components: {},
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
<mi-button icon="jiazaizhong">左图标按钮</mi-button>
<mi-button icon="jiazaizhong" iconPosition="right">右图标按钮</mi-button>
</template>
<template #code>

  ```vue
<template>
    <mi-button icon="jiazaizhong">左图标按钮</mi-button>
    <mi-button icon="jiazaizhong" iconPosition="right">右图标按钮</mi-button>
</template>
<script>
    export default {
      components: {},
    };
</script>
  ```
</template>
</Container>
</template>


<template>
<Container title="组合">
<template #list>
<mi-button-group>
    <mi-button>上一页</mi-button>
    <mi-button>主页</mi-button>
    <mi-button>下一页</mi-button>
</mi-button-group>
</template>
<template #code>

  ```vue
<template>
    <mi-button-group>
      <mi-button>上一页</mi-button>
      <mi-button>主页</mi-button>
      <mi-button>下一页</mi-button>
    </mi-button-group>
</template>
<script>
    export default {
      components: {},
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
  import Button from '../../src/components/button/Button.vue';
    import ButtonGroup from '../../src/components/button/ButtonGroup.vue';
  export default {
    components: {
    'mi-button':Button,
    'mi-button-group':ButtonGroup,
    },
        data() {
          return {
            loading: false,
            }
        }
  };
</script>