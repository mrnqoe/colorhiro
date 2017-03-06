<template>
  <div class="colorPreview">
    <div v-show="showPreview">
      <div class="thumbnail" :style="{ 'background-color': '#'+ pickedColor[0].hex }">
        <h1> {{ pickedColor[0]["name"] }}   #{{ pickedColor[0]["hex"] }}  </h1>
      </div>
      <button type="button" class="btn btn-success btn-lg btn-block" v-on:click="showSpec" > Yesss I like this color </button>
      <button type="button" class="btn btn-danger btn-lg btn-block" v-on:click="back" > NOPE, not this one </button>
    </div>

  <!-- <div v-show="backClicked">
      <colorList></colorList>
  </div> -->


  </div>
</template>

<script>
import Home                                                 from './Home.vue'
import {post_data, get_data}                                from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import colorList                                            from './colorList.vue'
import { Swatches, Slider, Material }                       from 'vue-color'
import RoomAccess                                           from './RoomAccess.vue'
import {EventBus}                                           from '../helpers/event-bus.js'




export default {

  name: 'colorPreview',
  props: ['pickedColor'],
  components: {
    'colorList' : colorList,
    'roomAccess' : RoomAccess,

  },
  data: function(){
    return {
      showPreview: true,
      selectedItem: true,
      colorList: false
      // backClicked: false
    }
  },
  methods: {
    showSpec: function(){
      console.log("clicked")
      this.$root.$router.push({name:"roomAccess"})

    },
    back: function(){
      console.log("clicked back")
      this.selectedItem = null
      EventBus.$emit('wanna-go-back', this.selectedItem);
      // this.showPreview = false
      // this.selectedItem === null
      // this.backClicked = true

      // this.$root.$router.go('/').$mount('.colorList')

    }
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