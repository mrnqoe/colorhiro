<template>
  <div class="spec">
    <h1> Here is your color specification </h1>
    <h3>Color Name: {{ colorName }} /  Hex code: {{ colorHex }}</h3>
      <br><br><br><br>
    <h3> How about little more details? on your {{ colors.hex }} </h3>
    <slider-picker v-model="colors" @change-color="onChange"></slider-picker>
    <material-picker v-model="colors" @change-color="onChange"></material-picker>
      <br><br>
    <h2> COLOR PALETTES</h2>
    <swatches-picker v-model="colors" @change-color="onChange"></swatches-picker>
    {{ colorsName }}
      <br><br>
      <p> If you wish to share your favourite color with amigos here is your link! </p>
  </div>
</template>

<script>
import { Swatches, Slider, Material }     from 'vue-color'
import Home                               from './Home.vue'
import {post_data, get_data}              from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import ntc                                from '../helpers/ntc.js'

export default {

  name: 'spec',
  props: ['colorCode'],
  components: {
    'swatches-picker': Swatches,
    'material-picker': Material,
    'slider-picker': Slider
  },

  data: function(){
    return {
      colorName: this.colorCode,
      colorHex: colorToHex(this.colorCode),

      colors: {
        // hex: this.colorCode,
        hex: colorToHex(this.colorCode),
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      },
      colorsName: ''
    }
  },

  watch: {
    colors: function(newColor){
      this.colorsName = hexToColor(newColor.hex)
      console.log("i'm watching")

    }
  },
  methods: {
    onChange: function(val) {
      this.colors = val
    },
    fetchColors: function(){
      return get_data(this.$http, 'http://localhost:3000/')
    }
  }
}


</script>

<style>
/*
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
  color: black;
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
  background:white;
  border-style: black;

}*/

</style>
