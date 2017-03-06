<template>
  <div class="colorList">
    <div v-if="loading" :duration="5000">
      loading ... {{ loading }}
      <div class="progress progress-striped">
        <div class="progress-bar" :style="progressWidth">
          <span></span>
        </div>
      </div>
    </div>
    <div v-else>

      <div v-if="selectedItem === null">
        <div class="container">
          <h5>Wait.. but which " {{ colorName }} " are you talking about? </h5>
          <ul class="list-group" >
            <li v-for="color in colorData" class="list-group-item foo" v-on:click="colorSelected($event.target.innerText)">
              {{ color.name }}
            </li>
          </ul>
        </div>
      </div>

      <div v-else>
        <colorPreview v-bind:pickedColor="selectedItem"></colorPreview>
      </div>

    </div>
  </div>
</template>

<script>
import Home                                                 from './Home.vue'
import {post_data, get_data, getColorData }                                from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import colorPreview                                         from './colorPreview.vue'
import {EventBus}                                           from '../helpers/event-bus.js'




export default {
  name: 'colorList',
  components: {
    'colorPreview' : colorPreview,
  },
  props: ['colorName'],
  data: function(){
    return {
      colorData: null,
      loading: true,
      clicked: false,
      selectedItem: null,
      progress: 50
    }
  },
  computed: {
    progressWidth: function(){
      return "width:" + this.progress + "%";
    }
  },
  created: function () {
    let self = this
    EventBus.$on('wanna-go-back', result => self.selectedItem = null);
    this.getColorData();
  },
  // ready: function () {
  //   this.getColorData();
  // },
  methods: {
    getColorData: function() {
      var url = "http://localhost:3000/user"
      this.$http.post(url, {color:this.colorName}, {
         emulateJSON: true
       })
        .then(function(response){
          // console.log('response');
          return response
        } )
        .then(function(json) {
          this.colorData = json.body.color
          this.loading = false
          // console.log("Event added!");
          resolve(json);
        }).catch(function(error) {
          return error
        // console.log(error);
      })
    },

    colorSelected: function(c){
      this.selectedItem = this.colorData.filter(function(i){
        if (i.name === c) {
          console.log(i)
          return i
        }
      })
    }

    // start: function(){
    //   this.progress = 90
    // },

    // back: function(){
    //   this.show = false
    // },
  }
}


</script>

<style>

.foo:hover {
  background: gold;
  opacity: .5;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 0;
  text-align: center;
}

/*
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
  color: black;
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
  background:white;
  border-style: black;

}*/

</style>

