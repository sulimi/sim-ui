# 一个 Vue UI 组件



## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 前言

>使用本框架前，请先做好以下两步准备


1. 下载 `sass`、`sass-loader` 包

```
yarn add -D sass
yarn add -D sass-loader
//OR
npm i -D sass
npm i -D sass-loader
```  

2. 添加 CSS 样式

    
```
*,*::before,*::after{box-sizing: border-box}

//    IE 8 及以上浏览器都支持此浏览器
```


    
## 安装 sim-ui

```
npm i --save sim-ui
```


## 开始使用

```
import {Button,ButtonGroup} from 'sim-ui'
import 'sim-ui/dist/index.css'

export default {
  components: {
    Button,
    ButtonGroup,
  }
}
```




## 文档

[链接](https://sulimi.github.io/sim-ui/)





