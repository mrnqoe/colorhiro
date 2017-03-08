<template>

  <div class="container previewContainer">
    <div v-show="showPreview" class="center">
    <br class="lead">
      <span class="thumbnail" :style="{ 'background-color': '#'+ pickedColor.hex }">
      </span>
    </div>
        <h3> {{ pickedColor.name }}   #{{ pickedColor.hex }}  </h3>
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
      this.$parent.$parent.$data.active = !this.$parent.$parent.$data.active
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
    display: block;
    width: 5em;
    height: 5em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    border: 0.5em solid black;
    box-sizing: border-box;
    -webkit-animation: spin 15s infinite linear;
       -moz-animation: spin 15s infinite linear;
         -o-animation: spin 15s infinite linear;
            animation: spin 15s infinite linear;
}

@-moz-keyframes spin {
  0% {
    -moz-transform: rotateZ(0deg);
  }
  100% {
    -moz-transform: rotateZ(360deg);
  }
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(360deg);
  }
}
@-o-keyframes spin {
  0% {
    -o-transform: rotate(0deg);
  }
  100% {
    -o-transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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

</style>
