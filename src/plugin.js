import Toast from './components/toast/Toast';

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message) {
      let Constructor = Vue.extend(Toast);  //先引用一个组件，变成一个方法
      let toast = new Constructor();  //把组件变成一个实例
      toast.$slots.default = [message];  //拿到用户传入的提示文字插到组件插槽内
      toast.$mount();  //得挂载(不mount 组件内的所有生命周期钩子不会执行)
      document.body.appendChild(toast.$el);  //把元素放到body里

    };
  }
};