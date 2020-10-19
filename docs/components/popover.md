---
title: Popover - 弹出层
---
# 弹出层

<ClientOnly>
<template>
<Container title="基础">
<template #list>
<mi-popover>
   <template slot="content">
        <div>hi 这是弹出层</div>
      </template>
      <mi-button>点我出现</mi-button>
</mi-popover>
</template>
<template #code>

  ```vue
<template>
    <mi-popover>
       <template slot="content"><div>hi 这是弹出层</div></template>
       <mi-button>点我出现</mi-button>
    </mi-popover>
</template>


  <script>
    import Popover from '../../src/components/popover/Popover.vue';
    import Button from '../../src/components/button/Button.vue';
    export default {
      components: {
      'mi-popover':Popover,
      'mi-button':Button,
      }
    };
  </script>
  ```
</template>
</Container>
</template>

<template>
<Container title="弹出方位">
<template #list>
<mi-popover>
   <template slot="content"><div>hi 这是弹出层</div></template>
   <mi-button>上方出现</mi-button>
</mi-popover>
<mi-popover position="bottom">
   <template slot="content"><div>hi 这是弹出层</div></template>
   <mi-button>下方出现</mi-button>
</mi-popover>
<mi-popover position="left">
   <template slot="content"><div>hi 这是弹出层</div></template>
   <mi-button>左边出现</mi-button>
</mi-popover>
<mi-popover position="right">
   <template slot="content"><div>hi 这是弹出层</div></template>
   <mi-button>右边出现</mi-button>
</mi-popover>
</template>
<template #code>

  ```vue
<template #list>
    <mi-popover>
       <template slot="content"><div>hi 这是弹出层</div></template>
       <mi-button>上方出现</mi-button>
    </mi-popover>
    <mi-popover position="bottom">
       <template slot="content"><div>hi 这是弹出层</div></template>
       <mi-button>下方出现</mi-button>
    </mi-popover>
    <mi-popover position="left">
       <template slot="content"><div>hi 这是弹出层</div></template>
       <mi-button>左边出现</mi-button>
    </mi-popover>
    <mi-popover position="right">
       <template slot="content"><div>hi 这是弹出层</div></template>
       <mi-button>右边出现</mi-button>
    </mi-popover>
</template>


  <script>
    import Popover from '../../src/components/popover/Popover.vue';
    import Button from '../../src/components/button/Button.vue';
    export default {
      components: {
      'mi-popover':Popover,
      'mi-button':Button,
      }
    };
  </script>
  ```
</template>
</Container>
</template>

<template>
<Container title="触发方式">
<template #list>
<mi-popover>
   <template slot="content">
        <div>hi 这是弹出层</div>
      </template>
      <mi-button>点击出现</mi-button>
</mi-popover>
<mi-popover trigger="hover">
   <template slot="content">
        <div>hi 这是弹出层</div>
      </template>
      <mi-button>hover出现</mi-button>
</mi-popover>
</template>
<template #code>

  ```vue
<template>
    <mi-popover>
       <template slot="content"><div>hi 这是弹出层</div></template>
       <mi-button>点击出现</mi-button>
    </mi-popover>
    <mi-popover trigger="hover">
       <template slot="content"><div>hi 这是弹出层</div></template>
       <mi-button>hover出现</mi-button>
    </mi-popover>
</template>


  <script>
    import Popover from '../../src/components/popover/Popover.vue';
    import Button from '../../src/components/button/Button.vue';
    export default {
      components: {
      'mi-popover':Popover,
      'mi-button':Button,
      }
    };
  </script>
  ```
</template>
</Container>
</template>

</ClientOnly>


<script>
  import Popover from '../../src/components/popover/Popover.vue';
  import Button from '../../src/components/button/Button.vue';
  export default {
    components: {
    'mi-popover':Popover,
    'mi-button':Button,
    }
  };
</script>

## API


|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ----- | ----|
| **position** | 出现位置，可选值：top,bottom,left,right  | string | top | 否 |
| **trigger** | 触发方式，可选值：click,hover  | string | click | 否 |          
| **content(slot)** | Popover 内嵌 HTML 文本  | - | - | - |



