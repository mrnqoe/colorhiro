<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
// import color from './components/Color.vue'
var data = require('./components/helpers/fetchData.js')

export default {
  name: 'app',
  methods: {
    fetchData: data
    // fetchData: function () {
    //   this.$http.jsonp('http://localhost:3000/posts').then(response => {
    //     this.items = response.body;
    //     console.log(typeof(response.body))
    //     return response.body
    //   }).catch(error => {
    //     return error
    //   });
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
