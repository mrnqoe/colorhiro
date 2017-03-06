<template>
  <div class="Room">
    <i v-show="loading" class="fa fa-spinner fa-spin"></i>
    <h4>{{ name }}</h4>
    <div id="roomContent">
      <button v-on:click="send">Add 1</button>
      <p>The button above has been clicked {{ a }} times.</p>
    </div>
  </div>
</template>

<script>
import VueSocketio from 'vue-socket.io';

export default {
  name: 'Room',
  props: ['roomKey'],
  data: function () {
    return {
      loading: true,
      test: null,
      name: this.$root.$data.name,
      a: 0,
      b: 1,
      id: null,
      messages: []
    }
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    message: function(val){
      console.log(val)
      console.log('message ?');
    }
  },
  methods: {
    test0: function(){
      console.log(this.$root);
    },
    send: function(event){
      this.a += 1
      this.$socket.emit('message', function(response) {
        console.log(response);
      }.bind(this));
    },
    add: function () {
      // Emit the server side

      // this.$options.sockets.emit("join", { a: 5, b: 3 });
    },
    connect: function () {
      console.log('hello');
      return 'hello'
    },
    get: function (msg) {
      // this.$options.sockets.emit("messages", msg, (response) => {
      //   console.log(response);
      // });
      this.$options.socket.emit("messages", msg)
    }
  }
}
</script>

<style>
</style>
