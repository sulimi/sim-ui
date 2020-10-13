import Vue from 'vue';
import App from './App.vue';
import Button from './src/components/button/Button.vue';
import Icon from './src/components/Icon.vue';
import ButtonGroup from './src/components/button/ButtonGroup.vue';
import Input from './src/components/Input.vue';
import Row from './src/components/grid/Row.vue';
import Col from './src/components/grid/Col.vue';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
new Vue({
  render: h => h(App)
}).$mount('#app');

