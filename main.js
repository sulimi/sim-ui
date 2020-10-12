import Vue from 'vue';
import App from './App.vue';
import Button from './src/components/Button.vue';
import Icon from './src/components/Icon.vue';
import ButtonGroup from './src/components/ButtonGroup.vue';
import Input from './src/components/Input.vue'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
new Vue({
  render: h => h(App)
}).$mount('#app');

