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
import Tabs from './src/components/tab/Tabs.vue';
import TabsHead from './src/components/tab/TabsHead.vue';
import TabsBody from './src/components/tab/TabsBody.vue';
import TabsItem from './src/components/tab/TabsItem.vue';
import TabsPane from './src/components/tab/TabsPane.vue';
import Popover from './src/components/popover/Popover.vue';

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

Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);

Vue.component('g-popover', Popover);
new Vue({
  render: h => h(App)
}).$mount('#app');

