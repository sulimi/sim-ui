---
title: Popover - 弹出层
---
# 弹出层

<ClientOnly>
<template>
<Container title="基础">
<template #list>
<s-popover>
   <template slot="content">
        <div>hi 这是弹出层</div>
      </template>
      <s-button>点我出现</s-button>
</s-popover>
</template>
<template #code>

  ```vue
<template>
    <Popover>
       <template slot="content"><div>hi 这是弹出层</div></template>
       <Button>点我出现</Button>
    </Popover>
</template>


  <script>
import {Popover,Button} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
    export default {
      components: {
      Popover,
      Button,
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
<s-popover>
   <template slot="content"><div>hi 这是弹出层</div></template>
   <s-button>上方出现</s-button>
</s-popover>
<s-popover position="bottom">
   <template slot="content"><div>hi 这是弹出层</div></template>
   <s-button>下方出现</s-button>
</s-popover>
<s-popover position="left">
   <template slot="content"><div>hi 这是弹出层</div></template>
   <s-button>左边出现</s-button>
</s-popover>
<s-popover position="right">
   <template slot="content"><div>hi 这是弹出层</div></template>
   <s-button>右边出现</s-button>
</s-popover>
</template>
<template #code>

  ```vue
<template #list>
    <Popover>
       <template slot="content"><div>hi 这是弹出层</div></template>
       <Button>上方出现</Button>
    </Popover>
    <Popover position="bottom">
       <template slot="content"><div>hi 这是弹出层</div></template>
       <Button>下方出现</Button>
    </Popover>
    <Popover position="left">
       <template slot="content"><div>hi 这是弹出层</div></template>
       <Button>左边出现</Button>
    </Popover>
    <Popover position="right">
       <template slot="content"><div>hi 这是弹出层</div></template>
       <Button>右边出现</Button>
    </Popover>
</template>


  <script>
import {Popover,Button} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
    export default {
      components: {
      Popover,
      Button,
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
<s-popover>
   <template slot="content">
        <div>hi 这是弹出层</div>
      </template>
      <s-button>点击出现</s-button>
</s-popover>
<s-popover trigger="hover">
   <template slot="content">
        <div>hi 这是弹出层</div>
      </template>
      <s-button>hover出现</s-button>
</s-popover>
</template>
<template #code>

  ```vue
<template>
    <Popover>
       <template slot="content"><div>hi 这是弹出层</div></template>
       <Button>点击出现</Button>
    </Popover>
    <Popover trigger="hover">
       <template slot="content"><div>hi 这是弹出层</div></template>
       <Button>hover出现</Button>
    </Popover>
</template>


  <script>
import {Popover,Button} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
    export default {
      components: {
      Popover,
      Button,
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
    's-popover':Popover,
    's-button':Button,
    }
  };
</script>

## API


|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ----- | ----|
| **position** | 出现位置，可选值：top,bottom,left,right  | string | top | 否 |
| **trigger** | 触发方式，可选值：click,hover  | string | click | 否 |          
| **content(slot)** | Popover 内嵌 HTML 文本  | - | - | - |



