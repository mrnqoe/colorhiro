// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import queries from './mixins/queries.js'
import color from './mixins/color.js'


var vm = new Vue({
  el: '#app',
  router,
  mixins: [queries, color],
  template: '<App/>',
  components: {App}
  // data: {
  //   session : { init_color: '', admin: '', share_key: ''},
  //   sessions: []
  // },
  // ready: function(){
  //   this.fetchdata();
  // },
  // methods: {
  //   fetchdata: function() {
  //     var sessions = [{
  //       init_color: 'pink',
  //       admin: 'Sara',
  //       share_key: 'abcdefg'
  //     }];
  //     this.$set('sessions', sessions);
  //   },
  //   postdata: function() {
  //     if(this.session.init_color){
  //       this.sessions.push(this.session);
  //       this.session = {init_color:'', admin:'', share_key:''};
  //       this.postdata();
  //     }
  //   }
  // }
})

// var vm = new Vue ({
//   el: '#hello',
//   mixins: [queries],
//   template: 'event',
//   components: {event},
//   data: {
//     session : { init_color: '', admin: '', share_key: ''},
//     sessions: []
//   },
//   ready: function(){
//     this.fetchSession();
//   },
//   methods: {
//     fetchSession: function() {
//       var sessions = [{
//         init_color: 'pink',
//         admin: 'Sara',
//         share_key: 'abcdefg'
//       }];
//       this.$set('sessions', sessions);
//     },
//     postSession: function() {
//       if(this.session.init_color){
//         this.sessions.push(this.session);
//         this.session = {init_color:'', admin:'', share_key:''};
//         this.postdata();
//       }
//     }
//   }
// })

console.log(vm);
