<template>
  <div class="posts">
    <p>{{ posts }}</p>
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
      posts: 'postsin'
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
