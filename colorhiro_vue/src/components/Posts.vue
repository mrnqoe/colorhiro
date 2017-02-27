<template>
  <div class="posts">
    <div item in items></div>
      {{ item }}
  </div>
</template>

<script>
// var postsin;
// this.$http.get('localhost:3000/application').then(response => {
//   postsin = response.body;
// }, response => {
//   postsin = 'error'
// });
export default {
  name: 'posts',
  data () {
    return {
      items: []
    }
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      this.$http.jsonp('localhost:3000/', function(data) {
        this.items = data;
        console.log(data)
      });
    }
  }
  // computed: {
  //   jsonObj: function() {
  //     this.$http.get('localhost:3000/application').then(response => {
  //     postsin = response.body;
  //     }, response => {
  //       postsin = 'error'
  //     });
  //   }
  // }
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
