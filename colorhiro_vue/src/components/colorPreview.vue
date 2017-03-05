<template>
  <div class="colorPreview">
    <div class="thumbnail" :style="{ 'background-color': '#'+ pickedColor[0].hex }">
      <h1> {{ pickedColor[0]["name"] }}   #{{ pickedColor[0]["hex"] }}  </h1>
    </div>
    <button type="button" class="btn btn-success btn-lg btn-block" v-on:click="showSpec">Yesss I like this color</button>
    <button type="button" class="btn btn-danger btn-lg btn-block" v-on:click="back">NOP, not this one</button>
  </div>
</template>

<script>
import Home                                                 from './Home.vue'
import {post_data, get_data}                                from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import colorList                                            from './colorList.vue'

export default {
  name: 'colorPreview',
  props: ['pickedColor'],
  components: {
    'colorPreview' : colorPreview
  },
  data: function(){
    return {

    }
  },
  methods: {

  }
}


</script>

<style>
.colorPreview{
  height: 30em;
}
.thumbnail{
  height: 30em;
}
</style>