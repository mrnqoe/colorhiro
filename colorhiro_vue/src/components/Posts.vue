<template>
  <!-- <div class="posts" :item='fetchData'>
      {{ item }}
  </div> -->
  <div class="posts">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
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
