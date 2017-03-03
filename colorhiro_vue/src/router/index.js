import Vue from           'vue'
import Router from        'vue-router'
import VueResource from   'vue-resource'
import Hello from         'components/Hello'
import Room from          'components/Room'
import Home from          'components/Home'
import Spec from          'components/Spec'

var VueMaterial = require('vue-material')

Vue.use(require('vue-faker'))
Vue.use(VueResource)
Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home

    },
    {
      path: '/room/:share_key',
      name: 'room',
      component: Room
    },
    // // {
    // //   path: '/posts',
    // //   name: 'Posts',
    // //   props: ['item'],
    // //   component: Posts
    // // },
    {
      path: '/spec',
      name: 'spec',
      component: Spec

    }
  ]
})
