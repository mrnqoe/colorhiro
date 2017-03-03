<template>
  <div class="spec">
    <div class="row">
      <div class="col-xs-6 col-md-6">
        <h1> Here is your color specification </h1>
        <h1>Color Name: {{ colorName }}  Hex code: {{ colorHex }}</h1>
        <br><br><br><br>
        <h2>If you wish to see other colors sepcs {{ colors.hex }} </h2>
      </div>
      <div class="col-xs-6 col-md-6">
        <material-picker v-model="colors" @change-color="onChange"></material-picker>
        <br><br>
        <h2> More colors with names {{ colorsName }}</h2>
        <swatches-picker v-model="colors" @change-color="onChange"></swatches-picker>
        <br><br>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <slider-picker v-model="colors" @change-color="onChange"></slider-picker>
        <p> If you wish to share your favourite color with amigos here is your link! </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Swatches } from 'vue-color'
import { Slider } from 'vue-color'
import { Material } from 'vue-color'
import Home from './Home.vue'
import {post_data, get_data} from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import ntc from '../helpers/ntc.js'

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
