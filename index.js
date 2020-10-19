import Vue from 'vue';
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
import Collapse from './src/components/collapse/Collapse.vue';
import CollapseItem from './src/components/collapse/CollapseItem.vue';
Vue.use(plugin);
export {
  ButtonGroup,
  Button,
  Icon,
  Input,
  Row,
  Col,
  Layout,
  Content,
  Footer,
  Sider,
  Header,
  Toast,
  Tabs,
  TabsHead,
  TabsBody,
  TabsItem,
  TabsPane,
  Popover,
  Collapse,
  CollapseItem,
  plugin
}