<template>
  <div class="color" :style="{ 'background-color': color }">
  <h1>Type in a color</h1>
  <input type="text" style="{ 'color': color }" v-model="color"  v-on:keyup.enter="changeColor" placeholder="ex: red" />
  <h2>{{ newColor }}</h2>
  <h2>Press Enter!</h2>

  </div>
</template>

<script>
export default {
  name: 'color',
    data () {
      return {
        color: 'white',
        newColor: ''
        }
      },
  methods: {
    changeColor: function(){
      var fake = this.$faker().commerce.color();
      this.newColor = ('Yuck maybe try this one: ' + fake);
      var bgcolor = $('div.color').attr("style");
      document.querySelector("body").style = bgcolor;
    }
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


