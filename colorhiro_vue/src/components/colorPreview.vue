<template>
  <div class="inner cover">
    <div v-if="show">
      <div class="thumbnail" :style="{ 'background-color': '#'+ pickedColor[0].hex }">
        <h3> {{ pickedColor[0]["name"] }}   #{{ pickedColor[0]["hex"] }}  </h3>
      </div>
      <div class="lead">
      <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" v-on:click="showSpec"></span>
      <span class="glyphicon glyphicon-thumbs-down" aria-hidden="true" v-on:click="back"></span>
      </div>
<!--     <div v-else>
      <spec v-if="specClicked" v-bind:colorName="pickedColor[0]"></spec>
      <colorList v-if="backClicked"></colorList>
    </div> -->
  </div>
</template>

<script>
import Home                                                 from './Home.vue'
import {post_data, get_data}                                from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import colorList                                            from './colorList.vue'
import { Swatches, Slider, Material }                       from 'vue-color'
import spec                                                 from './Spec.vue'


export default {
  name: 'colorPreview',
  props: ['pickedColor'],
  components: {
    'colorList' : colorList,
    'spec' : spec,
  },
  data: function(){
    return {
      show: true,
      backClicked: false,
      specClicked: false
    }
  },
  methods: {
    showSpec: function(){
      console.log("clicked")
      this.specClicked = true
      this.$root.$router.push({name:"roomAccess"})

    },
    back: function(){
      this.backClicked = true
      this.show = false
      this.$forceUpdate();
    }
  }
}


</script>

<style>

.colorPreview{
  height: 30em;
}
.thumbnail {
  height: auto;
  border-radius: 20px;
  text-align: center;
}

.lead {
  text-align: center;
}
</style>
