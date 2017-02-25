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
  </div>
</template>

<script scr="faker.js">
export default {
  name: 'world',
  data () {
    return {
      msg: 'Welcome to My World',
      counter: 0,
      color: 'Blue'
    }
  },
  methods: {
    submit: function(event) {
      console.log(event.key)
      if(event.key === "Enter") {
        console.log('the id of the input was:' + event.currentTarget.id);
        console.log("enter key was pressed!");
        var fake = this.$faker().name.findName();
        console.log(fake);
        this.color = fake;
        // this.color = $faker().name.findName();
        // console.log("COLOR:",this.color);
      }
    }
  }

  //   updateMessage: function () {
  //     this.color = this.$faker().name.findName()
  //     console.log(this.$name.textContent)
  //     this.$nextTick(function () {
  //       console.log(this.$name.textContent)
  //     })
  //   }
  // }
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
