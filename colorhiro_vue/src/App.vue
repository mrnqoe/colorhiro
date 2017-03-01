<template>
  <div class="app" :style="{ 'background-color': color }">
    <img src="./assets/logo.png">
    <h1>Type in a color</h1>
    <input
      type="text"
      style="{ 'color': color }"
      v-model="color"
      v-on:keyup.enter="handleColorInput"
      placeholder="ex: Lavender blue" />
    <h2>Press Enter!</h2>
  </div>
</template>

<script>
import {changeColor}  from './helpers/color.js'
// import fetchdata from './helpers/queries.js'
import {tester}       from './helpers/tester.js'


export default {
  name: 'app',
  data: function(){
    return {
      color: ''
      // color: changeColor()
    }
  },
  methods: {
    handleColorInput: function(ev){
      let data_out = {color: this.color}
      return tester(this.$http, data_out)
    }
  },
  watch: {
    color: function(){
      changeColor()
    }
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

.color{
  padding: 3em;
  border-style: black 1em;
  border-radius: 0.5em;

}

h1{
  font-weight: bold;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.2px;
}
h2{
  font-weight: bold;
  color: white;
}


ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

input {
  padding: 1em 1em;
  font-size: 2em;
  border-style: black;

}
</style>
