<template>
  <div class="world">
    <div v-if="loading">
      loading ... {{ loading }}
    </div>
    <div v-else>{{ colorData }}</div>
  </div>
</template>

<script>
import Home                                                 from './Home.vue'
import {post_data, get_data}                                from '../helpers/queries.js'
import {changeColor, changeName, colorToHex, hexToColor}    from '../helpers/color.js'

export default {
  name: 'world',
  props: ['colorName'],
  data: function(){
    return {
      colorData: null,
      loading: true
      // colorHex: this.colorData,
    }
  },
  created: function () {
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
          console.log('response');
          return response
        })
        .then(function(json) {
          this.colorData = json.body.color
          this.loading = false
          console.log("Event added!");
          resolve(json);
        }).catch(function(error) {
          return error
        console.log(error);
      })
    }
  }
}


</script>

<style>
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
