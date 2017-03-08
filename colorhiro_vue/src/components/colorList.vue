<template>
  <div class="colorList">
    <div v-if="loading" :duration="5000">
    </div>
    <div v-else-if="colorName">
      <div v-if="selectedItem === null">
        <div class="container colorContainer" >
          <ul class="list-group">
            <li v-for="color in colorData" class="list-group-item foo" v-on:click="colorSelected(color.name)">
              {{ color.name }}
              <span class="color-ball" :style="{ 'background-color': '#'+ color.hex }"></span>
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <colorPreview v-bind:pickedColor="selectedItem[0]"></colorPreview>
      </div>
    </div>
  </div>
</template>

<script>
import Home                                                 from './Home.vue'
import {post_data, get_data, getColorData }                 from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'
import colorPreview                                         from './colorPreview.vue'
import {EventBus}                                           from '../helpers/event-bus.js'

export default {
  name: 'colorList',
  components: {

    'colorPreview' : colorPreview,
    'home' : Home,
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
  watch: {
    colorName: function () {
      this.getColorData('/api');
    }
  },
  created: function () {
    let self = this
    EventBus.$on('wanna-go-back', result => self.selectedItem = null);
  },
  methods: {
    getColorData: function() {
      var url = 'http://Sample-env.5ukbsjxwk2.us-east-1.elasticbeanstalk.com/color/'+this.colorName
      if(this.colorName){
        this.$http.get(url, {
           emulateJSON: true
        })
        .then(function(response){
            // console.log('response');
          return response
        } )
        .then(function(json) {
          if(json.body.color.length >= 1){
            this.colorData = json.body.color
            this.loading = false
            resolve(json);
          }else{
            this.colorData = null
            this.loading = false
          }
        }).catch(function(error) {
          return error
          // console.log(error);
        })
      }
    },
    enterRoom: function(){
      console.log("clicked")
      this.$root.$router.push({name:"roomAccess"})
    },
    colorSelected: function(c){
      this.selectedItem = this.colorData.filter(function(i){
        if (i.name === c) {
          console.log(i)
          return i
        }
      })
      this.$root.$data.color = this.selectedItem[0]
    }
  }
}

</script>

<style>
h5{
  text-align: center;
}
.colorContainer{
  padding: 30px;
}

.foo:hover span {
}
.color-ball span {
  height: 20px;
  width: 20px;
  display: inline-block;
  border-radius: 20px;
  float: right;

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
input {
  padding: 1em 1em;
  font-size: 2em;
  background:white;
  border-style: black;

}

</style>
