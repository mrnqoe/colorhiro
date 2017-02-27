// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // data: {
  //   data1: []
  // },
  // ready: function () {
  //   this.$http.get('localhost:3000/application').then(function (response) {
  //     this.data1 = response.data
  //   })
  // },
  router,
  template: '<App/>',
  components: {App}
})
