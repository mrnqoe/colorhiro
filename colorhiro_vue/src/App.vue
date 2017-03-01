<template>
  <div class="app" :style="{ 'background-color': color }">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <h1>Type in a color</h1>
    <input
      type="text"
      style="{ 'color': color }"
      v-model="color"
      v-on:keyup.enter="changeColor"
      placeholder="ex: red" />
    <h2>{{ newColor }}</h2>
    <h2>Press Enter!</h2>
  </div>
</template>

<script>
import myColor from './mixins/color.js'
import postdata from './mixins/queries.js'

export default {
  name: 'app',
  mixins: [myColor],
  data: function(){
    return {
      color: 'blue',
      newColor: '',
      color: this.changeColor()
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
