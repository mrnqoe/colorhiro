<template>
  <!-- <div class="posts" :item='fetchData'>
      {{ item }}
  </div> -->
  <div v-if="items" class="posts">
      <!-- <h2>{{ item[0].name }}</h2> -->
    <div v-for="item in items">
      <p>{{ item.posts[0].id }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'posts',
  data() {
    return {
    item: this.fetchData()
  }
  },
  created: function() {
      this.fetchData();
  },
  methods: {
    fetchData: function () {
      this.$http.jsonp('http://localhost:3000/posts').then(response => {
        /*this.items = response.body;*/
        console.log(response.body)
        this.item = response.body
      }).catch(error => {
        this.item = error
      });
    }
  }
}
// name: 'world',
//   data () {
//     return {
//       msg: 'Welcome to My World',
//       counter: 0,
//       color: '',
//       newColor: ''
//     }
//   },
//   methods: {
//     submit: function(event) {
//       if(event.key === "Enter") {
//         var fake = this.$faker().commerce.color();
//         console.log(fake);
//         this.newColor = ("Yuck maybe try is one: " + fake);
//       }
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
