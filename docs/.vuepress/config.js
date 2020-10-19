module.exports = {
  base:'/sumi-ui-vue2/',
  title: 'Mi UI',
  description: '一个好用的UI组件库',
 themeConfig: {
   displayAllHeaders: true,
    nav:[
      {text: '主页', link:'/'},
      {text: '文档', link: '/get-started/'},
      {text: '交流',link: 'https://github.com/sulimi/sumi-ui-vue2'}
    ],
   sidebar: [
     {
       title: '入门',
       collapsable: false,
       children: [
         '/get-started/',
         '/install/',
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