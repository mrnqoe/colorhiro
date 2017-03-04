<template>

  <div class="home" >
<<<<<<< HEAD
    <transition name="fade">
      <div v-if="show">
        <h1>Type in a color</h1>
        <input
          type="text"
          v-model="color"
          v-on:keyup.enter="handleColorInput"
          placeholder="ex: Lavender blue" />
      </div>
    </transition>

    <spec v-if="submitted" v-bind:colorCode="data_in"></spec>
=======
  <!-- <transition-group name="fade"> -->
    <h1>Type in a color</h1>
    <div>
    <md-spinner :md-size="20" md-indeterminate class="md-accent"></md-spinner>
    </div>
    <input
      type="text"
      v-model="color"
      v-on:keyup.enter="handleColorInput"
      placeholder="ex: Lavender blue" />
    <button v-on:click="show = !show"> Submmit </button>
    <!-- </transition-group> -->
    <spec v-if="test" v-bind:colorCode="color"></spec>
>>>>>>> parent of 5412d9f... added transition for the input from Home component, started playing with unsplash api
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
      submitted: false,
      show: true,
      colorCode: '',
      data_in: null
    }
  },
  methods: {
    handleColorInput: function(ev){
      var url = "http://localhost:3000/user"
      console.log(ev);
      if(this.color){
        let data_out = {color: this.color}
<<<<<<< HEAD
        this.data_in = post_data(this.$http, url, data_out)
        // this.submitted = true
        // this.colorCode = colorToHex(this.color)
        // this.show = false
        return null
=======
        this.test = true
        this.colorCode = colorToHex(this.color)
        this.submit = ''
        return post_data(this.$http, data_out)
>>>>>>> parent of 5412d9f... added transition for the input from Home component, started playing with unsplash api
      }
    },
    handleNameInput: function(ev){
      if(this.name){
        let data_out = {color: this.color}
        return post_data(this.$http, data_out)
      }
    },
    fetchColors: function(c){
      var url = "http://localhost:3000/color"
      return get_data(this.$http, url, c)
    }
  },
  watch: {
    color: function(){
      changeColor(this.color)
    },
    data_in: function(){
      handleColorInput(this.color)
    }
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
