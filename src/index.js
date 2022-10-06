import Vue from 'vue';
import Vue2Component from './Vue2Component.vue';

Vue.component('Vue2Component', Vue2Component);

const app = new Vue({
  el: '#vue2app',
  render: function (h) {
    return h('Vue2Component');
  }
});
