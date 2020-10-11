import Vue from 'vue';
import Button from './Button.vue';
import Icon from './components/Icon.vue';
import ButtonGroup from './ButtonGroup.vue';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: true
  }
});


//单元测试
import chai from 'chai';
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect;

//1 这里应该是测试icon
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'arrow',
    }
  });
  vm.$mount();

  let useElement = vm.$el.querySelector('use');
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-arrow');
  vm.$el.remove();
  vm.$destroy();
}
//2 测试loading，同时输入icon和loading，期望出现loading
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'arrow',
      loading: true
    }
  });
  vm.$mount();

  let useElement = vm.$el.querySelector('use');
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-jiazaizhong');
  vm.$el.remove();
  vm.$destroy();
}
//3 测试icon在左边还是右边：order控制
{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'arrow',
    }
  });
  vm.$mount(div);

  let svgElement = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svgElement);
  expect(order).to.eq('1');  //css的所有属性值应该是一个字符串，期待的也应该是字符串
  vm.$el.remove();  //button元素删掉
  vm.$destroy();  //button对象删掉
}
//4 测试在右边
{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'arrow',
      iconPosition: 'right'
    }
  });
  vm.$mount(div);

  let svgElement = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svgElement);
  expect(order).to.eq('2');
  vm.$el.remove();
  vm.$destroy();
}

//5 测试事件click
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor();
  vm.$mount();
  let spy = chai.spy(function () {})  //声明一个间谍函数，伪装匿名函数
  vm.$on('click', spy);  //代替匿名函数，监听间谍函数
  let btn = vm.$el;
  btn.click();
  expect(spy).to.have.been.called()  //期待间谍函数被调用了
}

