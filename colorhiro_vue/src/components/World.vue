<template>
  <div class="world">
    <div>
      <h1>{{ msg }}</h1>
      <button v-on:click="counter += 100">Add more</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <div>
      <p>Your color: {{ color }}</p>
        <input
          v-on:keyup.enter="submit"
          type="text"
          class="form-control"
          placeholder="favorite Color"
          v-model="color"
        />
    </div>
    <div>
      <p>{{newColor}}</p>
    </div>
  </div>
</template>

<script scr="faker.js">
export default {
  name: 'world',
  data () {
    return {
      msg: 'Welcome to My World',
      counter: 0,
      color: '',
      newColor: ''
    }
  },
  methods: {
    submit: function(event) {
      if(event.key === "Enter") {
        var fake = this.$faker().commerce.color();
        console.log(fake);
        this.newColor = ("Yuck maybe try is one: " + fake);
      }
    }
  }
// math.random [adasfdsf]

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
