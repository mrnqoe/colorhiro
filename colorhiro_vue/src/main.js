// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import queries from './mixins/queries.js'

var vm = new Vue({
  el: '#app',
  router,
  mixins: [queries],
  data: {
    session: {color: '',share_key: ''},
    hello: 'HELLO'
  },
  ready: function() {
    console.log(this.queries);
  },
  template: '<App/>',
  components: {App}
})
