<template>
  <div class="spec">
    <div class="row">
      <div class="col-xs-6 col-md-6">
        <h3> Here is your color specification </h3>
        <h3>Color Name: {{ colorName }}  Hex code: {{ colorHex }}</h3>
        <br><br>
        <h3>If you wish to see other colors sepcs {{ colors.hex }} </h3>
      </div>
      <div class="col-xs-6 col-md-6 text-center">
        <h3>COLOR PALETTES</h3>
        <swatches-picker v-model="colors" @change-color="onChange"></swatches-picker>
        {{ colorsName }}
        <br><br>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-12 text-center">
        <slider-picker v-model="colors" @change-color="onChange"></slider-picker>
        <h4> If you wish to share your favourite color with amigos here is your link! </h4>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-12 text-center">
          <h3> Photos from Unsplash </h3>
          {{ unsplashPhotos }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swatches, Slider, Material }     from 'vue-color'
import Home                               from './Home.vue'
import {post_data, get_data}              from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import ntc                                from '../helpers/ntc.js'
import Unsplash, { toJson }               from 'unsplash-js'
import { unsplashCred } from '../helpers/variable.js'


const unsplash = new Unsplash(unsplashCred());

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
      unsplashPhotos: [],
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
  created: function(){
    console.log("ready to load")
    var _this = this
    unsplash.search.photos(this.colorCode, 1, 4)
      .then(toJson)
      .then(json => {
        _this.unsplashPhotos = json.results
        console.log("yes")
        // Your code
      });
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
      var url = "localhost:3000/color";
      return colorToHex(this.colorCode,()=>{
       get_data(this.$http, url, this.colorCode)
      })
    }
  }
}


</script>

<style>

.spec .vue-color__slider{
  position: relative;
  width: auto;
  padding: 1em 5em;
  box-shadow: 0;
}

.spec .vue-color__swatches{
  position: relative;
  width: auto;
  height: auto;
  background-color: rgba(0, 0, 0, .12);
}

.spec .vue-color__slider__hue-warp{
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
}

.spec .vue-color__slider__swatch{
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
}

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
