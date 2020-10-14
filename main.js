import Vue from 'vue';
import App from './App.vue';
import Button from './src/components/button/Button.vue';
import Icon from './src/components/Icon.vue';
import ButtonGroup from './src/components/button/ButtonGroup.vue';
import Input from './src/components/input/Input.vue';
import Row from './src/components/grid/Row.vue';
import Col from './src/components/grid/Col.vue';
import Layout from './src/components/layout/Layout.vue';
import Content from './src/components/layout/Content.vue';
import Footer from './src/components/layout/Footer.vue';
import Sider from './src/components/layout/Sider.vue';
import Header from './src/components/layout/Header.vue';
import Toast from './src/components/toast/Toast.vue';
import plugin from './src/plugin.js';

Vue.use(plugin);

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);

Vue.component('g-layout', Layout);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);
Vue.component('g-header', Header);

Vue.component('g-toast', Toast);
new Vue({
  mounted() {
    this.$toast('撒国际奥赛就挂了看见大法官克拉刻录机第三个路口附近', {
      closeButton: {
        text: '关闭了',
        callback: () => {
          console.log('用户点击了关闭');
        }
      },
    });
  },
  render: h => h(App)
}).$mount('#app');

