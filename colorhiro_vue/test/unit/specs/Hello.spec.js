import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to the App')
  })
  it('should connect to server', () => {
    var response = false;
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    Vue.http.get('http://localhost:3000/posts').then(response => {
      return true;
    }, response => {
      return false
    })
  })
  //   const Constructor = Vue.extend(Hello)
  //   const vm = new Constructor().$mount()
  //   expect(vm.$el.querySelector('.hello h1').textContent)
  //     .to.equal('Welcome to Your Vue.js App')
  // })
})
