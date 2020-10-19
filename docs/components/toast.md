---
title: Toast - 提示框
---
# 提示框


<ClientOnly>
<template>
<Container title="类型">
<template #list>
<mi-toast></mi-toast>
</template>
<template #code>

  ```vue
  
  ```
</template>
</Container>
</template>
</ClientOnly>



<script>
  import Toast from '../../src/components/toast/Toast.vue';
  export default {
    components: {
    'mi-toast':Toast,
    }
  };
</script>