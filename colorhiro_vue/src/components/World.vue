<template>
  <div class="world">
    <h1>{{ msg }}</h1>
    <button v-on:click="counter += 100">Add more</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  name: 'world',
  data () {
    return {
      msg: 'Welcome to My World',
      counter: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
