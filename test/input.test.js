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

    it('接收 value', () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).to.equal('1234');  //期待input标签的value等于
      vm.$destroy();
    });

    it('接收 disabled', () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.equal(true);
      vm.$destroy();
    });

    it('接收 readonly', () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.readOnly).to.equal(true);
      vm.$destroy();
    });

    it('接收 error', () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
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
      vm.$destroy();
    });
  });

  describe('事件', () => {
    it('支持 change 事件', () => {

    });
  });

});