<template>
  <div>
    <!-- <transition name="fade"> -->
    <div class="inner cover">
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
        <transition-group
          name="staggered-fade"
          tag="ul"
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
        >
          <li
            v-for="(item, index) in computedList"
            v-bind:key="item.msg"
            v-bind:data-index="index"
          >{{ item.msg }}</li>
        </transition-group>
      </div>
    </div>
    <!-- <transition name="fade"> -->
      <!-- <colorList v-if="submitted" v-bind:colorName="color"></colorList> -->
    <!-- </transition> -->
  </div>
</template>

<script>
import { Swatches, Material, Slider }                       from 'vue-color'
import { generateRandomString }                             from '../helpers/share_key.js'
import { changeColor, changeName, colorToHex, hexToColor }  from '../helpers/color.js'
import spec                                                 from './Spec.vue'
import colorList                                            from './colorList.vue'
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
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ],
      submitted: false,
      // show: true,
      data_in: null,
    }
  },
  computed: {
    computedList: function () {
      var vm = this
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().indexOf(vm.color.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    handleColorInput: function(ev){
      if(this.color){
        let arr = ['blue','red','green']
        if(arr.indexOf(this.color) >= 0){
          this.submitted = true
          console.log('MAIN VUE DATA:',this.$root.$data.color);
        }else{
          this.submitted = false
          this.color = null;
        }
      }
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
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
