// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import myMixins from './mixins/queries.js'


var vm = new Vue({
  el: '#app',
  router,
  mixins: [myMixins],
  data: {
    session: {init_color: ''},
    sessions: []
   },
  template: '<App/>',
  components: {App}
  // ,
  // methods: {
  //   postdata: function(){
  //     if(this.session.init_color){
  //       this.sessions.push(this.session);
  //       this.session = {init_color:''};
  //     }
  //   }
  // }
})
