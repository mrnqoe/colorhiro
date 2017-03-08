<template>

  <div class="inner cover">
    <div v-show="showPreview">
      <div class="thumbnail" :style="{ 'background-color': '#'+ pickedColor.hex }">
        <h3> {{ pickedColor.name }}   #{{ pickedColor.hex }}  </h3>
      </div>
      <div class="lead">
        <span v-bind:title="goBack" class="glyphicon glyphicon-thumbs-down" aria-hidden="true" v-on:click="back"></span>
        <span v-bind:title="goFoward" class="glyphicon glyphicon-thumbs-up" aria-hidden="true" v-on:click="enterRoom"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Home                                                 from './Home.vue'
import {post_data, get_data}                                from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import colorList                                            from './colorList.vue'
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
      home: false,
      colorList: false,
      goBack: 'Go back to color selector!',
      goFoward: 'Continue to more fun!'
      // backClicked: false

    }
  },
  methods: {
    enterRoom: function(){
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
.thumbnail {
  height: auto;
  border-radius: 20px;
  text-align: center;
}

.lead {
  text-align: center;
}

.previewContainer{
  padding: 30px;
}

.previewContainer h3 {
    font-size: 24px;
    text-align: center;
}

.glyphicon-thumbs-up{
  margin-left: 0.5em;
  font-size: 1.8em;
}

.glyphicon-thumbs-up:hover {
  color: seagreen;
}

.glyphicon-thumbs-down{
  margin-right: 0.5em;
  font-size: 1.8em;
}

.glyphicon-thumbs-down:hover {
  color: red;
}

</style>
