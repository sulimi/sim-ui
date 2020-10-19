import Vue from 'vue';
import Button from './components/button/Button.vue';
import Icon from './components/Icon.vue';
import ButtonGroup from './components/button/ButtonGroup.vue';
import Input from './components/input/Input.vue';
import Row from './components/grid/Row.vue';
import Col from './components/grid/Col.vue';
import Layout from './components/layout/Layout.vue';
import Content from './components/layout/Content.vue';
import Footer from './components/layout/Footer.vue';
import Sider from './components/layout/Sider.vue';
import Header from './components/layout/Header.vue';
import Toast from './components/toast/Toast.vue';
import plugin from './plugin.js';
import Tabs from './components/tab/Tabs.vue';
import TabsHead from './components/tab/TabsHead.vue';
import TabsBody from './components/tab/TabsBody.vue';
import TabsItem from './components/tab/TabsItem.vue';
import TabsPane from './components/tab/TabsPane.vue';
import Popover from './components/popover/Popover.vue';
import Collapse from './components/collapse/Collapse.vue';
import CollapseItem from './components/collapse/CollapseItem.vue';
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

Vue.component('g-collapse', Collapse);
Vue.component('g-collapse-item', CollapseItem);
new Vue({
  el:'#app'
})