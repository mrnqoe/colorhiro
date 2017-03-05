// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import VueWebsocket from "vue-websocket";


var vm = new Vue({
  el: '#app',
  router,
  data: {
    user: {
      color: '',
      share_key: null
    },
  },
  template: '<App/>',
  components: {App},
  watch:{
    share_key: function () {
      this.share_key = true
    }
  }
})

var clicked = false
// create constructor
var Profile1 = Vue.extend({
  data: function () {
    return {
      clickVal: 'Click me !',
      click: null
    }
  },
  render: function (createElement) {
    // <div><slot></slot></div>
    return createElement('input', {
      domProps: {
        value: this.clickVal,
        type: "button"
      },
      on: {
        click: function (event) {
          console.log("click");
          new Profile2().$mount('#walter')
          Vue.use(VueWebsocket, "ws://localhost:5000");
        }
      }
    })
  }
})
// create an instance of Profile and mount it on an element
new Profile1().$mount('#divi')

// create constructor
var Profile2 = Vue.extend({
  template: '<p>{{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// create an instance of Profile and mount it on an element
// if(clicked || Profile1.click1){
//   new Profile2().$mount('#walter')
//   Vue.use(VueWebsocket, "ws://localhost:5000");
// }

// vm.component(App)
