---
title: Grid - 栅格
---
# 栅格


>这是一个24列栅格系统

<ClientOnly>
<template>
<Container title="基础">
    <template #list>
        <mi-row>
            <mi-col class="item" span="24">col-24</mi-col>
        </mi-row>
        <mi-row>
            <mi-col class="item" span="4">col-4</mi-col>
            <mi-col class="item" span="8">col-8</mi-col>
            <mi-col class="item" span="12">col-12</mi-col>
        </mi-row>
        <mi-row>
            <mi-col class="item" span="6">col-6</mi-col>
            <mi-col class="item" span="6">col-6</mi-col>
            <mi-col class="item" span="6">col-6</mi-col>
            <mi-col class="item" span="6">col-6</mi-col>
        </mi-row>
    </template>
<template #code>

  ```vue
<template>

    <!--mi-row 行-->
    <!--mi-col 列-->
    <!--span 控制占比-->
    <mi-row>
      <mi-col class="item" span="24">col-24</mi-col>
    </mi-row>

    <mi-row>
        <mi-col class="item" span="4">col-4</mi-col>
        <mi-col class="item" span="8">col-8</mi-col>
        <mi-col class="item" span="12">col-12</mi-col>
    </mi-row>
    
    <mi-row>
        <mi-col class="item" span="6">col-6</mi-col>
        <mi-col class="item" span="6">col-6</mi-col>
        <mi-col class="item" span="6">col-6</mi-col>
        <mi-col class="item" span="6">col-6</mi-col>
    </mi-row>

</template>

<script>
  import Row from '../../src/components/grid/Row.vue';
  import Col from '../../src/components/grid/Col.vue';
  export default {
    components: {
    'mi-row':Row,
    'mi-col':Col,
    },
  };
</script>
<style lang="scss" scoped>

* {
  box-sizing: border-box;
}

%colitem{
  min-height: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 1em;
  color: #fff;
}

.item:nth-child(odd){
@extend %colitem;
background: #81d2ad;
}

.item:nth-child(even){
@extend %colitem;
  background: #3eaf7c;
}
</style>
  ```
</template>
</Container>
</template>

<template>
<Container title="占比偏移">
    <template #list>
        <mi-row>
            <mi-col class="item" span="2" offset="2">col-2</mi-col>
            <mi-col class="item" span="6" offset="2">col-6</mi-col>
            <mi-col class="item" span="10" offset="2">col-10</mi-col>
        </mi-row>
        <mi-row>
            <mi-col class="item" span="6">col-6</mi-col>
            <mi-col class="item" span="4" offset="2">col-4</mi-col>
            <mi-col class="item" span="6">col-6</mi-col>
            <mi-col class="item" span="6">col-6</mi-col>
        </mi-row>
    </template>
<template #code>

  ```vue
<template>

    <!--mi-row 行-->
    <!--mi-col 列-->
    <!--span 控制占比-->
    <!--offset 控制偏移比例-->
    <mi-row>
        <mi-col class="item" span="2" offset="2">col-2</mi-col>
        <mi-col class="item" span="6" offset="2">col-6</mi-col>
        <mi-col class="item" span="10" offset="2">col-10</mi-col>
    </mi-row>
    
    <mi-row>
        <mi-col class="item" span="6">col-6</mi-col>
        <mi-col class="item" span="4" offset="2">col-4</mi-col>
        <mi-col class="item" span="6">col-6</mi-col>
        <mi-col class="item" span="6">col-6</mi-col>
    </mi-row>


</template>


<script>
  import Row from '../../src/components/grid/Row.vue';
  import Col from '../../src/components/grid/Col.vue';
  export default {
    components: {
    'mi-row':Row,
    'mi-col':Col,
    }
  };
</script>
<style lang="scss" scoped>

* {
  box-sizing: border-box;
}

%colitem{
  min-height: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 1em;
  color: #fff;
}

.item:nth-child(odd){
@extend %colitem;
background: #81d2ad;
}

.item:nth-child(even){
@extend %colitem;
  background: #3eaf7c;
}
</style>
  ```
</template>
</Container>
</template>

<template>
<Container title="随意间隔">
    <template #list>
        <mi-row gutter="30">
            <mi-col span="4" class="mi-col"><div>col-4</div></mi-col>
            <mi-col span="8" class="mi-col"><div>col-8</div></mi-col>
            <mi-col span="12" class="mi-col"><div>col-12</div></mi-col>
        </mi-row>
        <mi-row gutter="10">
            <mi-col span="6" class="mi-col"><div>col-6</div></mi-col>
            <mi-col span="6" class="mi-col"><div>col-6</div></mi-col>
            <mi-col span="6" class="mi-col"><div>col-6</div></mi-col>
            <mi-col span="6" class="mi-col"><div>col-6</div></mi-col>
        </mi-row>
    </template>
<template #code>

  ```vue
<template>

    <!--mi-row 行-->
    <!--mi-col 列-->
    <!--span 控制占比-->
    <!--gutter 控制padding间隔-->
    <template #list>
        <mi-row gutter="30">
            <mi-col span="4" class="item"><div>col-4</div></mi-col>
            <mi-col span="8" class="item"><div>col-8</div></mi-col>
            <mi-col span="12" class="item"><div>col-12</div></mi-col>
        </mi-row>
        <mi-row gutter="10">
            <mi-col span="6" class="item"><div>col-6</div></mi-col>
            <mi-col span="6" class="item"><div>col-6</div></mi-col>
            <mi-col span="6" class="item"><div>col-6</div></mi-col>
            <mi-col span="6" class="item"><div>col-6</div></mi-col>
        </mi-row>
    </template>

</template>

<script>
  import Row from '../../src/components/grid/Row.vue';
  import Col from '../../src/components/grid/Col.vue';
  export default {
    components: {
    'mi-row':Row,
    'mi-col':Col,
    }
  };
</script>
<style lang="scss" scoped>

* {
  box-sizing: border-box;
}

%colitem{
  min-height: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 1em;
  color: #fff;
}

.item:nth-child(odd){
    div{
        @extend %colitem;
        background: #81d2ad;
    }
}

.item:nth-child(even){
    div{
        @extend %colitem;
        background: #3eaf7c;
    }
}
</style>
  ```
</template>
</Container>
</template>

<template>
<Container title="flex布局">
    <template #list>
        <mi-row align="left">
            <mi-col class="item" span="4">left-4</mi-col>
            <mi-col class="item" span="8">left-8</mi-col>
            <mi-col class="item" span="8">left-8</mi-col>
        </mi-row>
        <mi-row align="center">
            <mi-col class="item" span="4">center-4</mi-col>
            <mi-col class="item" span="8">center-8</mi-col>
        </mi-row>
        <mi-row gutter="10"  align="right">
            <mi-col class="item" span="4">right-4</mi-col>
            <mi-col class="item" span="4">right-4</mi-col>
            <mi-col class="item" span="4">right-4</mi-col>
            <mi-col class="item" span="4">right-4</mi-col>
        </mi-row>
    </template>
<template #code>

  ```vue
<template>

    <!--mi-row 行-->
    <!--mi-col 列-->
    <!--span 控制占比-->
    <!--gutter 控制padding间隔-->
    <!--align 控制排列位置-->
    <mi-row align="left">
        <mi-col class="item" span="4">left-4</mi-col>
        <mi-col class="item" span="8">left-8</mi-col>
        <mi-col class="item" span="8">left-8</mi-col>
    </mi-row>

    <mi-row align="center">
        <mi-col class="item" span="4">center-4</mi-col>
        <mi-col class="item" span="8">center-8</mi-col>
    </mi-row>

    <mi-row gutter="10"  align="right">
        <mi-col class="item" span="4">right-4</mi-col>
        <mi-col class="item" span="4">right-4</mi-col>
        <mi-col class="item" span="4">right-4</mi-col>
        <mi-col class="item" span="4">right-4</mi-col>
    </mi-row>

</template>

<script>
  import Row from '../../src/components/grid/Row.vue';
  import Col from '../../src/components/grid/Col.vue';
  export default {
    components: {
    'mi-row':Row,
    'mi-col':Col,
    }
  };
</script>
<style lang="scss" scoped>

* {
  box-sizing: border-box;
}

%colitem{
  min-height: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 1em;
  color: #fff;
}

.item:nth-child(odd){
@extend %colitem;
background: #81d2ad;
}

.item:nth-child(even){
@extend %colitem;
  background: #3eaf7c;
}
</style>
  ```
</template>
</Container>
</template>

<template>
<Container title="响应式（默认为手机样式）">
    <template #list>
        <mi-row>
            <mi-col class="item" span="24" :iPad="{span:12}" :narrowPc="{span:1}" :pc="{span:13}" :widePc="{span:1}"
            ></mi-col>
            <mi-col class="item" span="24" :iPad="{span:12}" :narrowPc="{span:6}" :pc="{span:1}" :widePc="{span:8}"
            ></mi-col>
            <mi-col class="item" span="24" :iPad="{span:12}" :narrowPc="{span:17}" :pc="{span:10}" :widePc="{span:15}"
            ></mi-col>
        </mi-row>
        <mi-row>
            <mi-col class="item" span="6" :pc="{span:2}"></mi-col>
            <mi-col class="item" span="4" offset="2" :pc="{span:2}"></mi-col>
            <mi-col class="item" span="6" :pc="{span:8}"></mi-col>
            <mi-col class="item" span="6" :pc="{span:10}"></mi-col>
        </mi-row>
    </template>
<template #code>

  ```vue
<template>

    <!--mi-row 行-->
    <!--mi-col 列-->
    <!--span 控制占比-->
    <!--offset 控制偏移比例-->
    <mi-row>
        <mi-col class="item" span="24" 
                              :iPad="{span:12}" 
                              :narrowPc="{span:1}" 
                              :pc="{span:13}" 
                              :widePc="{span:1}"
        ></mi-col>
        <mi-col class="item" span="24" 
                              :iPad="{span:12}" 
                              :narrowPc="{span:6}" 
                              :pc="{span:1}" 
                              :widePc="{span:8}"
        ></mi-col>
        <mi-col class="item" span="24" 
                              :iPad="{span:12}" 
                              :narrowPc="{span:17}" 
                              :pc="{span:10}" 
                              :widePc="{span:15}"
        ></mi-col>
    </mi-row>
    
    <mi-row>
        <mi-col class="item" span="6" :pc="{span:2}">col-6</mi-col>
        <mi-col class="item" span="4" offset="2" :pc="{span:2}">col-4</mi-col>
        <mi-col class="item" span="6" :pc="{span:8}">col-6</mi-col>
        <mi-col class="item" span="6" :pc="{span:10}">col-6</mi-col>
    </mi-row>


</template>


<script>
  import Row from '../../src/components/grid/Row.vue';
  import Col from '../../src/components/grid/Col.vue';
  export default {
    components: {
    'mi-row':Row,
    'mi-col':Col,
    }
  };
</script>
<style lang="scss" scoped>

* {
  box-sizing: border-box;
}

%colitem{
  min-height: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 1em;
  color: #fff;
}

.item:nth-child(odd){
@extend %colitem;
background: #81d2ad;
}

.item:nth-child(even){
@extend %colitem;
  background: #3eaf7c;
}
</style>
  ```
</template>
</Container>
</template>
</ClientOnly>



## API

>Col

|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ----- | ----|
| **span**         | 栅格占位格数  | string/number | - | 是 |
| **offset** | 栅格向左偏移的间隔格数  | string/number | - | 否 |          
| **iPad**      | >=576 响应式栅格  | object | - | 否 |
| **narrowPc**     | >=768 响应式栅格  | object | -| 否 |
| **pc**     | >=992 响应式栅格  | object | -| 否 |
| **widePc**     | >=1200 响应式栅格  | object | -| 否 |

>Row

|    参数      | 说明 | 类型 | 默认值 | 是否必填 |
| ----------   | ---  | ---- | ------ | ----|
| **gutter**         | 栅格间隔  | string/number | - | 否 |
| **align** | flex布局下的水平布局方式，可选值：left,right,center  | string | - | 否 |          


<script>
  import Row from '../../src/components/grid/Row.vue';
  import Col from '../../src/components/grid/Col.vue';
  export default {
    components: {
    'mi-row':Row,
    'mi-col':Col,
    },
        data() {
          return {
            value: '双向绑定',
            }
        }
  };
</script>
<style lang="scss" scoped>

* {
  box-sizing: border-box;
}

%colitem{
  min-height: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 1em;
  color: #fff;
}

.item:nth-child(odd){
@extend %colitem;
background: #81d2ad;
}

.item:nth-child(even){
@extend %colitem;
background: #3eaf7c;
}
.mi-col:nth-child(odd)
    div{
        @extend %colitem;
        background: #81d2ad;
     }

.mi-col:nth-child(even)
    div{
        @extend %colitem;
         background: #3eaf7c;
     }

</style>