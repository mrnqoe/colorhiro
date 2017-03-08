<template>
  <main>
   <!--  {{ img }} -->
    <div class="inner cover" v-if="active">
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
    <colorList v-bind:colorName="color"></colorList>
  </main>
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
      active: true
      // img: spinball()
    }
  },
}
</script>

<style>

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

div .lead {
  display: block;
}

h1 .cover-heading:hover div .lead {
  display: none;
}

</style>
