// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

// Vue.http.get('http://localhost:3000/posts').then(response => {
//   return true;
// }, response => {
//   return false
// })
/* eslint-disable no-new */
// Vue.component('child', {
//   props: ['posts'],
//   template: <Posts/>
// })

var vm = new Vue({
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
  data: {foo: 'Foo Bar'},
  template: '<App/>',
  components: {App}
})

console.log(vm);
// new Vue({
//   el: 'posts',
//   template: '<Posts/>'
// })
