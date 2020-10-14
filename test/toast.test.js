const expect = chai.expect;
import Vue from 'vue';
import Toast from '../src/components/toast/Toast.vue';


Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist;
  });

  it('接收 autoClose 属性.', (done) => {
    let div=document.createElement('div')
    const Constructor = Vue.extend(Toast);
    const vm=new Constructor({
      propsData:{
        autoClose: 1,
      }
    }).$mount(div)
    setTimeout(()=>{
      expect(document.body.contains(vm.$el)).to.eq(false)
      done()
    },1000)

  });
});