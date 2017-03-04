<template>
  <div class="spec">
    <div v-if='loading'>
      loading ...
    </div>
    <div v-else>
      <h1> Here is your color specification </h1>
      <h1>{{ colorData }}</h1>
      <h3>Color Name: {{ colorData.name }} /  Hex code: {{ colorData.hex }}</h3>
        <br><br><br><br>
      <!-- <h3> How about little more details? on your {{ colors.hex }} </h3>
      <slider-picker v-model="colors" @change-color="onChange"></slider-picker>
      <material-picker v-model="colors" @change-color="onChange"></material-picker>
        <br><br>
      <h2> COLOR PALETTES</h2>
      <swatches-picker v-model="colors" @change-color="onChange"></swatches-picker>
      {{ paletteName }}
        <br><br>
        <p> If you wish to share your favourite color with amigos here is your link! </p>
        <br><br>
        <h1> Photos from Unsplash </h1>
        {{ unsplashPhotos }} -->
      </div>
  </div>
</template>

<script>
import { Swatches, Slider, Material }                       from 'vue-color'
import Home                                                 from './Home.vue'
import {post_data, get_data}                                from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
/*import Unsplash, { toJson }                                 from 'unsplash-js'*/
/*import { unsplashCred }                                     from '../helpers/variable.js'*/

/*const unsplash = new Unsplash(unsplashCred());*/

export default {
  name: 'spec',
  props: ['colorName'],
  components: {
    'swatches-picker': Swatches,
    'material-picker': Material,
    'slider-picker': Slider
  },
  /*created: function() {
    var url = "http://localhost:3000/user"
    this.colorData = post_data(this.$http, url, {color: this.colorName})*/
  /*},*/
  data: function(){
    return {
      colorData: null,
      loading: true,
      // colorName: this.colorName,
      colorHex: this.colorName,
      unsplashPhotos: [],
      colors: {
        // hex: this.colorName,
        hex: "F00000",
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
      paletteName: ''
    }
  },
  created: function(){
    /*var _this = this
    unsplash.search.photos(this.colorName, 1, 4)
      .then(toJson)
      .then(json => {
        _this.unsplashPhotos = json.results
        console.log("yes")
        console.log(_this.unsplashPhotos)
      });*/
    this.fetchColors()
  },
  watch: {
    colors: function(newColor){
      this.paletteName = hexToColor(newColor.hex)
      console.log("i'm watching")
    }
  },
  methods: {
    onChange: function(val) {
      this.colors = val
    },
    fetchColors: function () {
      var url = 'http://localhost:3000/user'
      this.$http.post(url, {name: this.colorName}, {
         emulateJSON: true
       })
        .then(function(response){
          console.log(response);
          return response
        })
        .then(function(json) {
          this.colorData = json
          this.loading = false
          resolve(json);
          console.log("Event added!");
        }).catch(function(error) {
          return error
        console.log(error);
      })
    }

    // fetchColors: function(){
    //   var url = "localhost:3000/color";
    //   return colorToHex(this.colorName,(c)=>{
    //    get_data(this.$http, url, c)
    //   })
    // }
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