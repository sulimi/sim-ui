---
title: Toast - 提示框
---
# 提示框

>特殊组件：需要引入插件才能使用 `$toast` 函数
```js
import Vue from 'vue';
import {plugin} from 'sim-ui-use';
Vue.use(plugin);
```

<ClientOnly>
<template>
<Container title="自动关闭">
    <template #list>
        <s-button @click="showToast">点我出现</s-button>
    </template>
<template #code>

  ```vue
<template>
    <Button @click="showToast">点我出现</Button>
</template>


<script>
import Vue from 'vue';
import {Button,plugin} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
Vue.use(plugin);
  export default {
    components: {
    Button,
    },
    methods: {
      showToast(){
        this.$toast({
          content: 'hi 我是提示框',
        });
      }
    },
  };
</script>
  ```
</template>
</Container>
</template>

<template>
<Container title="自动关闭时间">
    <template #list>
        <s-button @click="$toast({content: 'hi 我是提示框',
                                   autoClose: 1})">点我出现</s-button>
    </template>
<template #code>

  ```vue
<template>
    <Button @click="showToast">点我出现</Button>
</template>


<script>
import Vue from 'vue';
import {Button,plugin} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
  Vue.use(plugin);
  export default {
    components: {
    Button,
    },
    methods: {
      showToast(){
        this.$toast({
          content: 'hi 我是提示框',
          autoClose: 1
        });
      }
    },
  };
</script>
  ```
</template>
</Container>
</template>

<template>
<Container title="手动关闭">
    <template #list>
       <s-button @click="$toast({content: 'hi 我是提示框',
                                  autoClose:false,
                                  closeButton:{
                                  text:'关闭',
                                  callback:()=>{}
                                  }
                                  })">点我出现</s-button>
    </template>
<template #code>

  ```vue
<template>
    <Button @click="showToast">点我出现</Button>
</template>


<script>
import Vue from 'vue';
import {Button,plugin} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
  Vue.use(plugin);
  export default {
    components: {
    Button,
    },
    methods: {
      showToast(){
        this.$toast({
          content: 'hi 我是提示框',
          autoClose:5,
          closeButton:{
          text:'关闭',
          callback:()=>{
          //  这里可以传一些回调内容
          }
          }
        });
      },
    },
  };
</script>
  ```
</template>
</Container>
</template>


<template>
<Container title="出现位置">
    <template #list>
        <s-button @click="$toast({content: 'hi 我是提示框'})">上方出现</s-button>
       <s-button @click="$toast({content: 'hi 我是提示框',
                                  position:'middle'
                                  })">中间出现</s-button>
       <s-button @click="$toast({content: 'hi 我是提示框',
                                  position:'bottom'
                                  })">底部出现</s-button>
    </template>
<template #code>

  ```vue
<template>
    <Button @click="showTop">上方出现</Button>
    <Button @click="showMiddle">中间出现</Button>
    <Button @click="showBottom">底部出现</Button>
</template>


<script>
import Vue from 'vue';
import {Button,plugin} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
Vue.use(plugin);
  export default {
    components: {
    Button,
    },
    methods: {
      showTop(){
        this.$toast({
          content: 'hi 我是提示框',
        });
      },
      showMiddle(){
        this.$toast({
          content: 'hi 我是提示框',
          position:'middle'
        });
      },
      showBottom(){
        this.$toast({
          content: 'hi 我是提示框',
          position:'bottom'
        });
      },
    },
  };
</script>
  ```
</template>
</Container>
</template>

<template>
<Container title="可以传HTML">
    <template #list>
       <s-button @click="$toast({content: `<h1>标题</h1>`,
                                  enableHtml:true,
                                  })">点我出现</s-button>
    </template>
<template #code>

  ```vue
<template>
    <Button @click="showToast">点我出现</Button>
</template>


<script>
import Vue from 'vue';
import {Button,plugin} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
Vue.use(plugin);
  export default {
    components: {
    Button,
    },
    methods: {
      showToast(){
        this.$toast({
          content: `<h1>标题</h1>`,
          enableHtml:true,
        });
      },
    },
  };
</script>
  ```
</template>
</Container>
</template>

</ClientOnly>



<script>
  import Vue from 'vue';
  import Button from '../../src/components/button/Button.vue';
  import plugin from '../../src/plugin.js';
  import Toast from '../../src/components/toast/Toast.vue';
  Vue.use(plugin);
  export default {
    components: {
    's-button':Button,
    Toast
    },
    methods: {
      showToast(){
        this.$toast({
          content: 'hi 我是提示框',
        });
      }
    },
  };
</script>



## API

|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ----- | ----|
| **content**         | 提示信息  | string| - | 是 |
| **autoClose** | 关闭时间  | boolean/number（默认单位：秒） | 2 | 否 |          
| **closeButton**      | 配置对象，包含属性text和callback  | object | - | 否 |
| **enableHtml**     | 提示信息内容是否支持HTML输入  | boolean | false | 否 |
