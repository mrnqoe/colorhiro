import Vue from           'vue'
import Router from        'vue-router'
import VueResource from   'vue-resource'
import Hello from         'components/Hello'
import World from         'components/World'
import Posts from         'components/Posts'
Vue.use(require('vue-faker'))
Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/world',
      name: 'World',
      component: World
    },
    {
      path: '/posts',
      name: 'Posts',
      props: ['item'],
      component: Posts
    }
  ]
})
