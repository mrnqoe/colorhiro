<template>
  <main>
    <transition name="fade">
    <div v-if="show">
      <div class="home row">
          <div class="col-xs-12 col-md-12 text-center">
            <h1>Type in a color</h1>
          </div>
        </div>
        <div class="row form-group form-group-lg">
          <div class="col-xs-12 col-md-12 text-center">
            <input
              class="form-control"
              type="text"
              v-model="color"
              v-on:keyup.enter="handleColorInput"
              placeholder="Color" />
          </div>
        </div>
        <div class="ball"></div>
        <div class="ball1"></div>
    </div>
    </transition>
    <spec v-if="test" v-bind:colorCode="color"></spec>
  </main>
</template>

<script>
import { Swatches, Material, Slider }           from 'vue-color'
import {generateRandomString}                   from '../helpers/share_key.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import {post_data, get_data}                    from '../helpers/queries.js'
import spec                                     from './Spec.vue'


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

.form-group {
    margin-bottom: 15px;
    padding-top: 50px;
    padding-left: 200px;
    padding-right: 200px;
}

.form-group-lg .form-control {
  text-align: -webkit-center;
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

.ball {
    background-color: rgba(0,0,0,0);
    border: 5px solid rgba(0,183,229,0.9);
    opacity: .9;
    border-top: 5px solid rgba(0,0,0,0);
    border-left: 5px solid rgba(0,0,0,0);
    border-radius: 50px;
    box-shadow: 0 0 35px #2187e7;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    -moz-animation: spin .5s infinite linear;
    -webkit-animation: spin .5s infinite linear;
}

.ball1 {
    background-color: rgba(0,0,0,0);
    border: 5px solid rgba(0,183,229,0.9);
    opacity: .9;
    border-top: 5px solid rgba(0,0,0,0);
    border-left: 5px solid rgba(0,0,0,0);
    border-radius: 50px;
    box-shadow: 0 0 15px #2187e7;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    position: relative;
    top: -50px;
    -moz-animation: spinoff .5s infinite linear;
    -webkit-animation: spinoff .5s infinite linear;
}

@-moz-keyframes spin {
    0% {
        -moz-transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(360deg);
    };
}

@-moz-keyframes spinoff {
    0% {
        -moz-transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(-360deg);
    };
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    };
}

@-webkit-keyframes spinoff {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(-360deg);
    };
}
</style>
