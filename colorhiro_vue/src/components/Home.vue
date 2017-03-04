<template>

  <div class="home" >
  <transition name="fade">
  <div v-if="show">
    <h1>Type in a color</h1>
    <div>
    <md-spinner :md-size="20" md-indeterminate class="md-accent"></md-spinner>
    </div>
    <input
      type="text"
      v-model="color"
      v-on:keyup.enter="handleColorInput"
      placeholder="ex: Lavender blue" />
    </div>
    </transition>

    <spec v-if="test" v-bind:colorCode="color"></spec>
  </div>
</template>

<script>
import { Swatches, Material, Slider }                       from 'vue-color'
import {generateRandomString}                               from '../helpers/share_key.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import {post_data, get_data}                                from '../helpers/queries.js'
import spec                                                 from './Spec.vue'


export default {
  name: 'home',
  components: {
    'spec' : spec
  },
  data: function(){
    return {
      name  : '',
      color: changeColor(),
      test: false,
      show: true,
      colorCode: '',
      submit: "Press Enter!"
    }
  },
  methods: {
    handleColorInput: function(ev){
      if(this.color){
        let data_out = {color: this.color}
        this.test = true
        this.colorCode = colorToHex(this.color)
        this.submit = ''
        this.show = false
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

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
