// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Materials from "vue-materials"

Vue.use(Materials)

var vm = new Vue({

  el: '#app',
  router,
  data: {
    session: {
      init_color: '',
      share_key: ''
    },
    sessions: []
   },
  template: '<App/>',
  components: {App}

})
