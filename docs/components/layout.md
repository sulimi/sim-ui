---
title: Layout - 布局
---
# 布局

<ClientOnly>

<template>
<Container title="上中下布局">
<template #list>
    <s-layout>
        <s-header class="s-header">header</s-header>
        <s-content class="s-content">content</s-content>
        <s-footer class="s-footer">footer</s-footer>
    </s-layout>
</template>
<template #code>

  ```vue
<template>

    <s-layout>
        <s-header class="s-header">header</s-header>
        <s-content class="s-content">content</s-content>
        <s-footer class="s-footer">footer</s-footer>
    </s-layout>

</template> 

<script>
import {Layout,Header,Content,Footer} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
  export default {
    components: {
    's-layout':Layout,
    's-header':Header,
    's-content':Content,
    's-footer':Footer,
    }
  };
</script>


<style lang="scss" scoped>
%item{
    color: #fff;
    text-align: center;
}
$h:40px;
.s-header{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
.s-content{
    @extend %item;
    background: #81d2ad;
    height: 100px;
    line-height: 100px;
}
.s-footer{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
</style>
  ```
</template>
</Container>
</template>

<template>
<Container title="内容加侧边栏">
<template #list>
    <s-layout>
        <s-header class="s-header">header</s-header>
    <s-layout>
        <s-sider class="s-sider">sider</s-sider>
        <s-content class="s-content">content</s-content>
    </s-layout>
        <s-footer class="s-footer">footer</s-footer>
    </s-layout>
</template>
<template #code>

  ```vue
<template>

    <s-layout>
      <s-header class="s-header">header</s-header>
    <s-layout>
      <s-sider class="s-sider">sider</s-sider>
      <s-content class="s-content">content</s-content>
    </s-layout>
      <s-footer class="s-footer">footer</s-footer>
    </s-layout>

</template> 

<script>
import {Layout,Header,Content,Sider,Footer} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
  export default {
    components: {
    's-layout':Layout,
    's-header':Header,
    's-content':Content,
    's-sider':Sider,
    's-footer':Footer,
    }
  };
</script>


<style lang="scss" scoped>
%item{
    color: #fff;
    text-align: center;
}
$h:40px;
$hh:100px;
.s-header{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
.s-content{
    @extend %item;
    background: #81d2ad;
    height: $hh;
    line-height: $hh;
}
.s-footer{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
.s-sider{
   @extend %item;
    background: #3eaf7c;
    line-height: $hh;
    width: $hh;
}
</style>
  ```
</template>
</Container>
</template>

<template>
<Container title="独立侧边栏">
<template #list>
    <s-layout>
        <s-sider class="s-sider">sider</s-sider>
    <s-layout>
        <s-header class="s-header">header</s-header>
        <s-content class="s-content">content</s-content>
        <s-footer class="s-footer">footer</s-footer>
    </s-layout>
    </s-layout>
</template>
<template #code>

  ```vue
<template>

    <s-layout>
      <s-sider class="s-sider">sider</s-sider>
    <s-layout>
      <s-header class="s-header">header</s-header>
      <s-content class="s-content">content</s-content>
      <s-footer class="s-footer">footer</s-footer>
    </s-layout>
    </s-layout>

</template> 

<script>
import {Layout,Header,Content,Sider,Footer} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
  export default {
    components: {
    's-layout':Layout,
    's-header':Header,
    's-content':Content,
    's-sider':Sider,
    's-footer':Footer,
    }
  };
</script>


<style lang="scss" scoped>
%item{
    color: #fff;
    text-align: center;
}
$h:40px;
$hh:100px;
.s-header{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
.s-content{
    @extend %item;
    background: #81d2ad;
    height: $hh;
    line-height: $hh;
}
.s-footer{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
.s-sider{
   @extend %item;
    background: #4abf8a;
    line-height: 100px;
    width: $hh;
}
</style>
  ```
</template>
</Container>
</template>

</ClientOnly>


<script>
  import Layout from '../../src/components/layout/Layout.vue';
  import Header from '../../src/components/layout/Header.vue';
  import Content from '../../src/components/layout/Content.vue';
  import Sider from '../../src/components/layout/Sider.vue';
  import Footer from '../../src/components/layout/Footer.vue';
  export default {
    components: {
    's-layout':Layout,
    's-header':Header,
    's-content':Content,
    's-sider':Sider,
    's-footer':Footer,
    }
  };
</script>
<style lang="scss" scoped>

%item{
    color: #fff;
    text-align: center;
}

.s-header{
    @extend %item;
    background: #3eaf7c;
    height: 40px;
    line-height: 40px;
}
.s-content{
    @extend %item;
    background: #81d2ad;
    height: 100px;
    line-height: 100px;
}
.s-footer{
    @extend %item;
    background: #3eaf7c;
    height: 40px;
    line-height: 40px;
}
.s-sider{
   @extend %item;
    background: #4abf8a;
    line-height: 100px;
    width: 100px;
}

</style>