// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import myMixin from './mixins/queries.js'

Vue.component('posts', {
  template:
    '<div v-if="items"><div v-for="item in items"><div v-for="quote in item"><h3> {{ quote.title }} :</h3><p>- {{ quote.body }} </p></div></div></div>',
  mixins: [myMixin],
  data: function(){
    return {
      items: this.fetchdata('http://localhost:3000/sessions')
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
