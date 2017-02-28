<template>
  <div v-if="items" class="posts">
      <!-- <h2>{{ item[0].name }}</h2> -->
    <div v-for="item in items">
      <h3>{{ item.title }}</h3>
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'posts',
  data() {
    return {
      items: this.fetchData()
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
        // console.log()
        this.items = response.body["posts"]


      }).catch(error => {
        this.items = error
      });
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
