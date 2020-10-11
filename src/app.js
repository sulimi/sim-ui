import Vue from 'vue';
import Button from './Button.vue';
import Icon from './components/Icon.vue';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
new Vue({
  el: '#app',
  data: {}
});