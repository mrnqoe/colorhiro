<template>
  <div class="room">
    <h1>ROOM</h1>
    <h2>{{ key }}</h2>
  </div>
</template>

<script>
export default {
  name: 'room',
  // key: this.$route.params.share_key
  data: function () {
    return {
      key: this.$route.params['share_key']
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  color: black;
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
