// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'


// var fetchdata = require('./components/helpers/helpers.js')
import myMixin from './components/helpers/mixin.js'

Vue.component('posts', {
  template:
    '<div v-if="items"><div v-for="item in items"><p>{{ item[0].id }}</p></div></div>',
  mixins: [myMixin],
  data: function(){
    return {
      items: this.fetchdata()
    };
  // },
  // methods:
  //   function () {
  //     this.$http.jsonp('http://localhost:3000/posts').then(response => {
  //       this.items = response.body;
  //       console.log(typeof(response.body));
  //       return response.body;
  //     }).catch(error => {
  //     return error;
  //     });
  //   }
  }
});

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

