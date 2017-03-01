import Vue from           'vue'
import Router from        'vue-router'
import VueResource from   'vue-resource'
// import Hello from         'components/Hello'
import World from         'components/World'
import Color from         'components/Color'


Vue.use(require('vue-faker'))
Vue.use(VueResource)
Vue.use(Router)
// Hello.paramAttributes = ['foo', 'bar']
// Hello.data = function(){
//   return {message: 'bar'}
// }

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   props: {msg: 'hello'},
    //   component: Hello
    // }
    {
      path: '/',
      name: 'World',
      component: World
    }
    // // {
    // //   path: '/posts',
    // //   name: 'Posts',
    // //   props: ['item'],
    // //   component: Posts
    // // },
    // {
    //   path: '/color',
    //   name: 'Color',
    //   component: Color
    // }
  ]
})
