<template>
  <div class="home">
    <h1>Type in a color</h1>
    <div>
    <md-spinner :md-size="20" md-indeterminate class="md-accent"></md-spinner>
    </div>
    <input
      type="text"
      v-model="color"
      v-on:keyup.enter="handleColorInput"
      placeholder="ex: Lavender blue" />
    <h2>Press Enter!</h2>
    <spec v-if="test" v-bind:colorCode="color"></spec>
  </div>
</template>

<script>
import { Swatches }                               from 'vue-color'
import { Material }                             from 'vue-color'
import {generateRandomString}                   from '../helpers/share_key.js'
import { Slider } from 'vue-color'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import {post_data, get_data}                    from '../helpers/queries.js'
import spec                                     from './Spec.vue'
import Materials from     'vue-materials'

export default {
  name: 'home',
  components: {
    'spec' : spec
  },
  data: function(){
    return {
      // color : '',
      name  : '',
      color: changeColor(),
      test: false,
      colorCode: ''
    }
  },
  methods: {
    handleColorInput: function(ev){
      if(this.color){
        let data_out = {color: this.color}
        this.test = true
        this.colorCode = colorToHex(this.color)
      // console.log(colorToHex(this.color))
        return post_data(this.$http, data_out)
      }
    },
    handleNameInput: function(ev){
      if(this.name){
        let data_out = {color: this.color}
        return post_data(this.$http, data_out)
      }
    }
  },
  watch: {
    color: function(){
      changeColor(this.color)
    }
    // name: function(){
    //   changeName(this.name)
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
