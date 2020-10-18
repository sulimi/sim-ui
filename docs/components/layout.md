---
title: Layout - 布局
---
# 布局

<ClientOnly>
<template>
<Container title="上中下布局">
<template #list>

<mi-layout>
<mi-header class="mi-header">header</mi-header>
<mi-content class="mi-content">content</mi-content>
<mi-footer class="mi-footer">footer</mi-footer>
</mi-layout>

</template>
<template #code>

  ```vue
<template>

    <mi-layout>
        <mi-header class="mi-header">header</mi-header>
        <mi-content class="mi-content">content</mi-content>
        <mi-footer class="mi-footer">footer</mi-footer>
    </mi-layout>

</template> 

<script>
  import Layout from '../../src/components/layout/Layout.vue';
  import Header from '../../src/components/layout/Header.vue';
  import Content from '../../src/components/layout/Content.vue';
  import Sider from '../../src/components/layout/Sider.vue';
  import Footer from '../../src/components/layout/Footer.vue';
  export default {
    components: {
    'mi-layout':Layout,
    'mi-header':Header,
    'mi-content':Content,
    'mi-sider':Sider,
    'mi-footer':Footer,
    }
  };
</script>
<style lang="scss" scoped>

%item{
    color: #fff;
    text-align: center;
}
$h:40px;
.mi-header{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
.mi-content{
    @extend %item;
    background: #81d2ad;
    height: 100px;
    line-height: 100px;
}
.mi-footer{
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

<mi-layout>
<mi-header class="mi-header">header</mi-header>
<mi-layout>
<mi-sider class="mi-sider">sider</mi-sider>
<mi-content class="mi-content">content</mi-content>
</mi-layout>
<mi-footer class="mi-footer">footer</mi-footer>
</mi-layout>

</template>
<template #code>

  ```vue
<template>

    <mi-layout>
      <mi-header class="mi-header">header</mi-header>
    <mi-layout>
      <mi-sider class="mi-sider">sider</mi-sider>
      <mi-content class="mi-content">content</mi-content>
    </mi-layout>
      <mi-footer class="mi-footer">footer</mi-footer>
    </mi-layout>

</template> 

<script>
  import Layout from '../../src/components/layout/Layout.vue';
  import Header from '../../src/components/layout/Header.vue';
  import Content from '../../src/components/layout/Content.vue';
  import Sider from '../../src/components/layout/Sider.vue';
  import Footer from '../../src/components/layout/Footer.vue';
  export default {
    components: {
    'mi-layout':Layout,
    'mi-header':Header,
    'mi-content':Content,
    'mi-sider':Sider,
    'mi-footer':Footer,
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
.mi-header{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
.mi-content{
    @extend %item;
    background: #81d2ad;
    height: $hh;
    line-height: $hh;
}
.mi-footer{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
.mi-sider{
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
<mi-layout>
<mi-sider class="mi-sider">sider</mi-sider>
<mi-layout>
<mi-header class="mi-header">header</mi-header>
<mi-content class="mi-content">content</mi-content>
<mi-footer class="mi-footer">footer</mi-footer>
</mi-layout>
</mi-layout>

</template>
<template #code>

  ```vue
<template>

    <mi-layout>
      <mi-sider class="mi-sider">sider</mi-sider>
    <mi-layout>
      <mi-header class="mi-header">header</mi-header>
      <mi-content class="mi-content">content</mi-content>
      <mi-footer class="mi-footer">footer</mi-footer>
    </mi-layout>
    </mi-layout>

</template> 

<script>
  import Layout from '../../src/components/layout/Layout.vue';
  import Header from '../../src/components/layout/Header.vue';
  import Content from '../../src/components/layout/Content.vue';
  import Sider from '../../src/components/layout/Sider.vue';
  import Footer from '../../src/components/layout/Footer.vue';
  export default {
    components: {
    'mi-layout':Layout,
    'mi-header':Header,
    'mi-content':Content,
    'mi-sider':Sider,
    'mi-footer':Footer,
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
.mi-header{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
.mi-content{
    @extend %item;
    background: #81d2ad;
    height: $hh;
    line-height: $hh;
}
.mi-footer{
    @extend %item;
    background: #3eaf7c;
    height: $h;
    line-height: $h;
}
.mi-sider{
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
    'mi-layout':Layout,
    'mi-header':Header,
    'mi-content':Content,
    'mi-sider':Sider,
    'mi-footer':Footer,
    }
  };
</script>
<style lang="scss" scoped>

%item{
    color: #fff;
    text-align: center;
}

.mi-header{
    @extend %item;
    background: #3eaf7c;
    height: 40px;
    line-height: 40px;
}
.mi-content{
    @extend %item;
    background: #81d2ad;
    height: 100px;
    line-height: 100px;
}
.mi-footer{
    @extend %item;
    background: #3eaf7c;
    height: 40px;
    line-height: 40px;
}
.mi-sider{
   @extend %item;
    background: #4abf8a;
    line-height: 100px;
    width: 100px;
}

</style>