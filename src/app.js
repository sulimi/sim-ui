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

//5 测试事件click  期望这个函数被执行
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor();
  vm.$mount();
  vm.$on('click', function () {
    expect(1).to.eq(1)  //可能会误写这种代码，期望1等于1用于成立，但是我们期望的是这个函数被执行，这样判断不了是否被执行
  });
  // let btn = button.$el.querySelector('button');
  let btn = vm.$el;  //$el本身就是button
  btn.click();
}

