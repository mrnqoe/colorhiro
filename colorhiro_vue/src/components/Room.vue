<template>
  <div class="room">
    <h1>ROOM</h1>
    <i v-show="loading" class="fa fa-spinner fa-spin"></i>
  </div>
</template>

<script>

import {post_data, get_data}        from '../helpers/queries.js'

export default {
  name: 'room',
  data: function() {
    return {
      loading: true
    }
  },
  ready: function() {
    this.loading = false;
    let data_out = {color: this.color, share_key: this.share_key}
      get_data(this.$http, {share_key: 'ehCVe5'})
      console.log(this.$http)
  }
  // created: function () {
  //   this.get_data()
  // },
  // methods: {
  //   importShareKey: function(){
  //       let data_in = {share_key: share_key}
  //       return get_data(this.$http, data_in)
  //   }
  // }
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
