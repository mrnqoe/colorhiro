// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'
import VueSocketio from 'vue-socket.io';
var http = require('http'),
    httpProxy = require('http-proxy');

var $ = require ('jquery');
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
      Vue.use(VueSocketio, 'http://colorhiro-io-dev.us-east-1.elasticbeanstalk.com:80');
      router.push({path: '/room/:01010'})
      console.log('hello sockets !!! READY FOR DEPLOYMENT ??');
    }
  }
})
