import Vue from           'vue'
import Router from        'vue-router'
import VueResource from   'vue-resource'
import Hello from         'components/Hello'
import Room from          'components/Room'
import Home from          'components/Home'
import Spec from          'components/Spec'
import World from         'components/World'
import socketTest from    'components/socketTest'

Vue.use(require('vue-faker'))
Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home

    },
    {
      path: '/sockets',
      name: 'socketTest',
      component: socketTest

    },
    {
      path: '/room/:share_key',
      name: 'room',
      component: Room
    },
    {
      path: '/spec',
      name: 'spec',
      component: Spec

    }
  ]
})
