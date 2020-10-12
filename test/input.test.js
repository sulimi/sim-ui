const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/components/Input.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
  it('存在.', () => {    //Input存在
    expect(Input).to.exist;
  });

  describe('props', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });


    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).to.equal('1234');  //期待input标签的value等于
    });

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.equal(true);
    });

    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.readOnly).to.equal(true);
    });

    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '姓名不能少于两个字'
        }
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      const errorMessage = vm.$el.querySelector('.error-message');
      if (useElement) {
        expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error');
      }
      expect(errorMessage.innerText).to.equal('姓名不能少于两个字');
    });
  });

  describe('事件', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it('支持 change 事件', () => {
      vm = new Constructor({}).$mount();
      //假设有一个回调函数:
      const callback = sinon.fake();
      //监听change触发时回调触发
      vm.$on('change', callback);
      // ...
      // 触发input的change事件
      // ...
      let event = new Event('change');
      let inputElement = vm.$el.querySelector('input');
      inputElement.dispatchEvent(event);
      //断言
      expect(callback).to.have.been.calledWith(event);
    });
  });

});