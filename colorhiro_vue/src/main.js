// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import VueSocketio from 'vue-socket.io';
var http = require('http'),
    httpProxy = require('http-proxy');

var vm = new Vue({
  el: '#app',
  router,
  data: {
    name: '',
    color: null,
    roomAccess: false
  },
  template: '<App/>',
  components: {App},
  watch: {
    name: function () {

      this.roomAccess = true;
      Vue.use(VueSocketio, '/io');
      // proxy.on('upgrade', function (req, socket, head) {
      //   proxy.ws(req, socket, head);
      // });
      router.push({path: '/room/:01010'})
      console.log('hello sockets !!! READY FOR DEPLOYMENT ??');
    }
  }
})
// var clicked = false
// create constructor
// var Profile1 = Vue.extend({
//   data: function () {
//     return {
//       clickVal: 'Click me !',
//       click: null
//     }
//   },
//   render: function (createElement) {
//     // <div><slot></slot></div>
//     return createElement('input', {
//       domProps: {
//         value: this.clickVal,
//         type: "button"
//       },
//       on: {
//         click: function (event) {
//           console.log("click");
//           new Profile2().$mount('#walter')
//           Vue.use(VueWebsocket, "ws://localhost:5000");
//         }
//       }
//     })
//   }
// })
// create an instance of Profile and mount it on an element
// new Profile1().$mount('#divi')
//
// // create constructor
// var Profile2 = Vue.extend({
//   template: '<p>{{alias}}</p>',
//   data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   }
// })
// create an instance of Profile and mount it on an element
// if(clicked || Profile1.click1){
//   new Profile2().$mount('#walter')
//   Vue.use(VueWebsocket, "ws://localhost:5000");
// }

// vm.component(App)
