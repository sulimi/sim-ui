module.exports = {
  head: [
    [
      "meta", // 移动端禁止用户缩放
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
      }
    ],
    ["link", { rel: "stylesheet", href: "/css/style.css" }], //
    ["script", { charset: "utf-8", src: "/js/disable-user-zoom.js" }] // 移动端,禁止用户缩放,引入你写的js
  ],
  base:'/sim-ui/',
  title: 'Sim UI',
  description: '一个好用的UI组件库',
 themeConfig: {
   displayAllHeaders: true,
    nav:[
      {text: '主页', link:'/'},
      {text: '文档', link: '/get-started/'},
      {text: '交流',link: 'https://github.com/sulimi/sim-ui'}
    ],
   sidebar: [
     {
       title: '入门',
       collapsable: false,
       children: [
         '/get-started/',
         '/install/',
         '/starting/',
       ]
     },
     {
       title:'组件',
       collapsable: false,
       sidebarDepth: 0,
       children:[
         '/components/button',
         '/components/input',
         '/components/grid',
         '/components/layout',
         '/components/toast',
         '/components/tabs',
         '/components/popover',
         '/components/collapsee',
       ]
     }
   ]
 }
}