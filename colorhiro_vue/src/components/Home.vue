<template>
  <div>
    <transition name="fade">
    <div v-if="show" class="inner cover">
      <h1 class="cover-heading">Type a color</h1>
      <div class="lead form-group form-group-lg">
        <input
          class="form-control"
          type="text"
          v-model="color"
          v-on:keyup.enter="handleColorInput"
          placeholder=""
          autofocus
          />
      </div>
    </div>
    </transition>
    <div class="progress progress-striped">
      <div class="progress-bar" :style="progressWidth">
        <span>{{ progess }}</span>
      </div>
    </div>
    <button class="btn btn-default" v-on:click="start" type="submit">Button</button>
    <colorList v-if="submitted" v-bind:colorName="color"></colorList>
    <!-- <spec v-if="test" v-bind:colorCode="color"></spec> -->
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
      data_in: null,
      progress: 10
    }
  },
  computed: {
    progressWidth: function(){
      return "width:" + this.progress + "%";
    }
  },
  created: function(){

  },
  methods: {
    handleColorInput: function(ev){
      if(this.color){
        this.submitted = true
        this.colorCode = this.color
        console.log(this.color);
        console.log(this.colorCode);
        console.log('MAIN VUE DATA:',this.$root.$data);
      }
    },
    start: function(){
      this.progress = 90
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
