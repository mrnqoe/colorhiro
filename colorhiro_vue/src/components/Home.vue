<template>
  <div class="home" >
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
    <colorList v-if="submitted" v-bind:colorName="color"></colorList>
    <!-- <spec v-if="submitted" v-bind:colorName="color"></spec> -->
  </div>
</template>

<script>
import { Swatches, Material, Slider }                       from 'vue-color'
import { generateRandomString }                             from '../helpers/share_key.js'
import { changeColor, changeName, colorToHex, hexToColor }  from '../helpers/color.js'
import spec                                                 from './Spec.vue'
import colorList                                            from './colorList.vue'
import colorPreview                                         from './colorPreview.vue'


export default {
  name: 'home',
  components: {
    'spec' : spec,
    'colorList' : colorList,
    'colorPreview' : colorPreview
  },
  data: function(){
    return {
      name  : '',
      color: '',
      submitted: false,
      show: true,
      colorCode: '',
      data_in: null
    }
  },
  methods: {
    handleColorInput: function(ev){
      if(this.color){
        this.submitted = true
        // this.show = false
        this.colorCode = this.color
        console.log(this.color);
        console.log(this.colorCode);
        return null
      }
    }
  }
  // watch: {
  //   color: function(){
  //     changeColor(this.color)
  //   }
  // }
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
/*ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}*/
a {
  color: #42b983;
}
input {
  padding: 1em 1em;
  font-size: 2em;
  border-style: black;
}
</style>