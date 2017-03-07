<template>

  <div class="inner cover">
    <div v-show="showPreview">
      <div class="thumbnail" :style="{ 'background-color': '#'+ pickedColor.hex }">
        <h3> {{ pickedColor.name }}   #{{ pickedColor.hex }}  </h3>
      </div>
      <div class="lead">
        <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" v-on:click="enterRoom"></span>
        <span class="glyphicon glyphicon-thumbs-down" aria-hidden="true" v-on:click="back"></span>
      </div>
    </div>
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
    enterRoom: function(){
      console.log("clicked")
      this.$root.$data.color = this.pickedColor.hex
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
.thumbnail {
  height: auto;
  border-radius: 20px;
  text-align: center;
}

.lead {
  text-align: center;
}
</style>
