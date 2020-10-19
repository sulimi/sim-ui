import Toast from './components/toast/Toast';


let currentToast;

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (toastOptions) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({
        Vue,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      });
    };
  }
};


//帮助函数
function createToast({Vue,propsData, onClose}) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({
    propsData
  });
  const {content}=propsData
  toast.$slots.default = [content];
  toast.$mount();
  toast.$on('close', onClose);
  document.body.appendChild(toast.$el);
  return toast;
}