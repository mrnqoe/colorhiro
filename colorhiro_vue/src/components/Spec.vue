<template>
  <div class="spec">
   <h1> Here is your color specification </h1>
   <h2>{{ spec.title }}</h2>
   <p> {{spec.body}}</p>
   <slider-picker v-model="colors" @change-color="onChange"></slider-picker>
  </div>
</template>




<script>
import { Slider } from 'vue-color'
import Home from './Home.vue'
import {post_data, get_data} from '../helpers/queries.js'



export default {
  name: 'spec',

  components: {
    'slider-picker': Slider
  },

  data: function(){
    return {
      msg : {},
      colors: {
        hex: '#194d33',
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      }
    }
  },
  created(){
    this.fetchdata()
  },
  methods: {
    onChange: function(val) {
      this.colors = val
    },

    fetchColors: function(){
      this.$http.get('http://localhost:3000/sessions').success(function(theseColors) {
      this.$data.colors = theseColors;
      }).error(function(error) {
      });
    },


}
}


</script>

<style>

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

}

</style>
