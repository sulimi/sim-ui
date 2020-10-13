import Vue from 'vue';
import App from './App.vue';
import Button from './src/components/button/Button.vue';
import Icon from './src/components/Icon.vue';
import ButtonGroup from './src/components/button/ButtonGroup.vue';
import Input from './src/components/Input.vue';
import Row from './src/components/grid/Row.vue';
import Col from './src/components/grid/Col.vue';
import Layout from './src/components/layout/Layout.vue'
import Content from './src/components/layout/Content.vue'
import Footer from './src/components/layout/Footer.vue'
import Sider from './src/components/layout/Sider.vue'
import Header from './src/components/layout/Header.vue'

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
new Vue({
  render: h => h(App)
}).$mount('#app');

