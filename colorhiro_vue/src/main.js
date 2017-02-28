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
    '<div v-if="items"><div v-for="item in items"><p>{{ item[0].body }}</p></div></div>',
  mixins: [myMixin],
  data: function(){
    return {
      items: this.fetchdata()
    };
  }
});

var vm = new Vue({
  el: '#app',
  router,
  data: {foo: 'Foo Bar'},
  template: '<App/>',
  components: {App}
})

console.log(vm);

