<template>
  <div>
    <transition name="fade">
    <div class="inner cover">
      <h1 class="cover-heading">Type a color</h1>
      <div class="lead form-group form-group-lg">
        <input
          class="form-control"
          type="text"
          v-model="color"
          placeholder=""
          autofocus
          />
      </div>
    </div>
    </transition>
      <colorList v-bind:colorName="color"></colorList>
  </div>
</template>

<script>
import { generateRandomString }                             from '../helpers/share_key.js'
import { changeColor, changeName, colorToHex, hexToColor }  from '../helpers/color.js'
import spec                                                 from './Spec.vue'
import colorList                                            from './colorList.vue'
import { getColorData }                                     from '../helpers/queries.js'
import colorPreview                                         from './colorPreview.vue'
import {EventBus}                                           from '../helpers/event-bus.js'

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
      previousColor: null,
      data_in: null,
    }
  },
  // methods: {
  //   handleColorInput: function(ev){
  //     // console.log("precious color:", this.previousColor)
  //     // console.log("color:", this.color)
  //     // if (!this.previousColor) {
  //     //   this.previousColor = this.color
  //     // } else if (this.previousColor !== this.color) {
  //     //   this.submitted = false
  //     //   let i = 0
  //     //   while (i < 100000) {
  //     //     i++
  //     //     console.log(i)
  //     //   }
  //     //   console.log("prrrrrrecious color:", this.previousColor)
  //     // console.log("rrrrrrcolor:", this.color)
  //     // }
  //     if(this.color){
  //       let arr = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]
  //       if(arr.indexOf(this.color) >= 0){
  //         this.submitted = true
  //         console.log('MAIN VUE DATA:',this.$root.$data.color);
  //       }else{
  //         this.submitted = false
  //         this.color = null;
  //       }
  //     }
  //   },
    // deleteColoreInput: function(ev){
    //   if (this.color){
    //     this.submitted = false
    //     this.color = null
    //   }
    // }
  // }
  // watch: {
  //   color: function(){
  //     changeColor(this.color)
  //   }
  // }
}
</script>

<style>

/*.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
/*  opacity: 0
}*/

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

.center-page {
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
}

.form-group {
  position: auto;
  margin-bottom: 15px;
  padding-top: 50px;
}

.form-group-lg .form-control {
  text-align: -webkit-center;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
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
  outline: 0;
  border-width: 0 0 2px 0;
  border-color: blue
}

</style>
