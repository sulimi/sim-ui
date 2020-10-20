---
title: Grid - 栅格
---
# 栅格


>这是一个24列栅格系统

<ClientOnly>
<template>
<Container title="基础">
    <template #list>
        <s-row class="row">
            <s-col class="item" span="24">col-24</s-col>
        </s-row>
        <s-row class="row">
            <s-col class="item" span="4">col-4</s-col>
            <s-col class="item" span="8">col-8</s-col>
            <s-col class="item" span="12">col-12</s-col>
        </s-row>
        <s-row class="row">
            <s-col class="item" span="6">col-6</s-col>
            <s-col class="item" span="6">col-6</s-col>
            <s-col class="item" span="6">col-6</s-col>
            <s-col class="item" span="6">col-6</s-col>
        </s-row>
    </template>
<template #code>

  ```vue
<template>

    <!--span 控制占比-->
    <Row>
      <Col class="item" span="24">col-24</Col>
    </Row>

    <Row>
        <Col class="item" span="4">col-4</Col>
        <Col class="item" span="8">col-8</Col>
        <Col class="item" span="12">col-12</Col>
    </Row>
    
    <Row>
        <Col class="item" span="6">col-6</Col>
        <Col class="item" span="6">col-6</Col>
        <Col class="item" span="6">col-6</Col>
        <Col class="item" span="6">col-6</Col>
    </Row>

</template>


<script>
import {Col,Row} from 'sim-ui-use';
import 'sim-ui-use/dist/index.css'
  export default {
    components: {Row,Col},
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
        <s-row class="row">
            <s-col class="item" span="2" offset="2">col-2</s-col>
            <s-col class="item" span="6" offset="2">col-6</s-col>
            <s-col class="item" span="10" offset="2">col-10</s-col>
        </s-row>
        <s-row class="row">
            <s-col class="item" span="6">col-6</s-col>
            <s-col class="item" span="4" offset="2">col-4</s-col>
            <s-col class="item" span="6">col-6</s-col>
            <s-col class="item" span="6">col-6</s-col>
        </s-row>
    </template>
<template #code>

  ```vue
<template>

    <!--span 控制占比-->
    <!--offset 控制偏移比例-->
    <Row>
        <Col class="item" span="2" offset="2">col-2</Col>
        <Col class="item" span="6" offset="2">col-6</Col>
        <Col class="item" span="10" offset="2">col-10</Col>
    </Row>
    
    <Row>
        <Col class="item" span="6">col-6</Col>
        <Col class="item" span="4" offset="2">col-4</Col>
        <Col class="item" span="6">col-6</Col>
        <Col class="item" span="6">col-6</Col>
    </Row>


</template>


<script>
  import {Col,Row} from 'sim-ui-use';
  import 'sim-ui-use/dist/index.css'
  export default {
    components: {Row,Col}
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
        <s-row gutter="30" class="row">
            <s-col span="4" class="s-col"><div>col-4</div></s-col>
            <s-col span="8" class="s-col"><div>col-8</div></s-col>
            <s-col span="12" class="s-col"><div>col-12</div></s-col>
        </s-row>
        <s-row gutter="10" class="row">
            <s-col span="6" class="s-col"><div>col-6</div></s-col>
            <s-col span="6" class="s-col"><div>col-6</div></s-col>
            <s-col span="6" class="s-col"><div>col-6</div></s-col>
            <s-col span="6" class="s-col"><div>col-6</div></s-col>
        </s-row>
    </template>
<template #code>

  ```vue
<template>

    <!--span 控制占比-->
    <!--gutter 控制padding间隔-->
    <template #list>
        <Row gutter="30">
            <Col span="4" class="item"><div>col-4</div></Col>
            <Col span="8" class="item"><div>col-8</div></Col>
            <Col span="12" class="item"><div>col-12</div></Col>
        </Row>
        <Row gutter="10">
            <Col span="6" class="item"><div>col-6</div></Col>
            <Col span="6" class="item"><div>col-6</div></Col>
            <Col span="6" class="item"><div>col-6</div></Col>
            <Col span="6" class="item"><div>col-6</div></Col>
        </Row>
    </template>

</template>


<script>
  import {Col,Row} from 'sim-ui-use';
  import 'sim-ui-use/dist/index.css'
  export default {
    components: {Row,Col}
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
        <s-row align="left" class="row">
            <s-col class="item" span="4">left-4</s-col>
            <s-col class="item" span="8">left-8</s-col>
            <s-col class="item" span="8">left-8</s-col>
        </s-row>
        <s-row align="center" class="row">
            <s-col class="item" span="4">center-4</s-col>
            <s-col class="item" span="8">center-8</s-col>
        </s-row>
        <s-row gutter="10"  align="right" class="row">
            <s-col class="item" span="4">right-4</s-col>
            <s-col class="item" span="4">right-4</s-col>
            <s-col class="item" span="4">right-4</s-col>
            <s-col class="item" span="4">right-4</s-col>
        </s-row>
    </template>
<template #code>

  ```vue
<template>

    <!--span 控制占比-->
    <!--gutter 控制padding间隔-->
    <!--align 控制排列位置-->
    <Row align="left">
        <Col class="item" span="4">left-4</Col>
        <Col class="item" span="8">left-8</Col>
        <Col class="item" span="8">left-8</Col>
    </Row>

    <Row align="center">
        <Col class="item" span="4">center-4</Col>
        <Col class="item" span="8">center-8</Col>
    </Row>

    <Row gutter="10"  align="right">
        <Col class="item" span="4">right-4</Col>
        <Col class="item" span="4">right-4</Col>
        <Col class="item" span="4">right-4</Col>
        <Col class="item" span="4">right-4</Col>
    </Row>

</template>

<script>
  import {Col,Row} from 'sim-ui-use';
  import 'sim-ui-use/dist/index.css'
  export default {
    components: {Row,Col}
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
        <s-row class="row">
            <s-col class="item" span="24" :iPad="{span:12}" :narrowPc="{span:1}" :pc="{span:13}" :widePc="{span:1}"
            ></s-col>
            <s-col class="item" span="24" :iPad="{span:12}" :narrowPc="{span:6}" :pc="{span:1}" :widePc="{span:8}"
            ></s-col>
            <s-col class="item" span="24" :iPad="{span:12}" :narrowPc="{span:17}" :pc="{span:10}" :widePc="{span:15}"
            ></s-col>
        </s-row>
        <s-row class="row">
            <s-col class="item" span="6" :pc="{span:2}"></s-col>
            <s-col class="item" span="4" offset="2" :pc="{span:2}"></s-col>
            <s-col class="item" span="6" :pc="{span:8}"></s-col>
            <s-col class="item" span="6" :pc="{span:10}"></s-col>
        </s-row>
    </template>
<template #code>

  ```vue
<template>

    <!--span 控制占比-->
    <!--offset 控制偏移比例-->
    <Row>
        <Col class="item" span="24" 
                              :iPad="{span:12}" 
                              :narrowPc="{span:1}" 
                              :pc="{span:13}" 
                              :widePc="{span:1}"
        ></Col>
        <Col class="item" span="24" 
                              :iPad="{span:12}" 
                              :narrowPc="{span:6}" 
                              :pc="{span:1}" 
                              :widePc="{span:8}"
        ></Col>
        <Col class="item" span="24" 
                              :iPad="{span:12}" 
                              :narrowPc="{span:17}" 
                              :pc="{span:10}" 
                              :widePc="{span:15}"
        ></Col>
    </Row>
    
    <Row>
        <Col class="item" span="6" :pc="{span:2}">col-6</Col>
        <Col class="item" span="4" offset="2" :pc="{span:2}">col-4</Col>
        <Col class="item" span="6" :pc="{span:8}">col-6</Col>
        <Col class="item" span="6" :pc="{span:10}">col-6</Col>
    </Row>


</template>


<script>
  import {Col,Row} from 'sim-ui-use';
  import 'sim-ui-use/dist/index.css'
  export default {
    components: {Row,Col}
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



<script>
  import Row from '../../src/components/grid/Row.vue';
  import Col from '../../src/components/grid/Col.vue';
  export default {
    components: {
    's-row':Row,
    's-col':Col,
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
.row{
    margin-bottom: 1em;
}

%colitem{
  min-height: 40px;
  line-height: 40px;
  text-align: center;

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
.s-col:nth-child(odd)
    div{
        @extend %colitem;
        background: #81d2ad;
     }

.s-col:nth-child(even)
    div{
        @extend %colitem;
         background: #3eaf7c;
     }

</style>


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

