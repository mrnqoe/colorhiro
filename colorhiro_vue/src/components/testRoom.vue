<template>
  <div class="testRoom">
    <i v-show="loading" class="fa fa-spinner fa-spin"></i>
    <h4>{{ name }}</h4>
    <div id="example-1">
      <!-- <button v-on:click="counter += 1">Add 1</button> -->
      <button v-on:click="send">Add 1</button>
      <p>The button above has been clicked {{ a }} times.</p>
    </div>
    <p>{{ messages }}</p>
  </div>
</template>

<script>
import VueSocketio from 'vue-socket.io';

export default {
  name: 'testRoom',
  props: ['roomKey'],
  data: function () {
    return {
      loading: true,
      test: null,
      name: this.$root.$data.name,
      a: 10,
      b: 1,
      id: null,
      messages: []
    }
  },
  ready: function() {
    // this.$sockets.emit('message', function(response) {
    //   console.log(response);
    // }.bind(this));
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
      this.$socket.emit('message', function(response) {
        console.log(response);
      }.bind(this));
    },
    add: function () {
      // Emit the server side
      this.a += 1
      // this.$options.sockets.emit("join", { a: 5, b: 3 });
    },
    connect: function () {
      console.log('hello');
      return 'hello'
      // this.$options.sockets.on('connect', function(data) {
      //   console.log('walkin disaster');
      //   socket.emit('join', 'Hello World from client');
      // });
    },
    get: function (msg) {
      // this.$options.sockets.emit("messages", msg, (response) => {
      //   console.log(response);
      // });
      this.$options.socket.emit("messages", msg)
    }
  }
  // sockets:{
  //   connect: function(){
  //     console.log(this);
  //     console.log('ey');
  //   },
  //   customEmit: function(val){
  //     console.log(this.$options.sockets);
  //     console.log('THIS IS FRONT DATA ||',val)
  //   },
  //   someOtherEmit: function(val){
  //     console.log('some other value:',val)
  //   }
  // },
  // methods: {
  //   send: function(event){
  //     this.$socket.emit('messages', 'SOME THING PLZ');
  //     this.message = '';
  //   },
  //   add: function () {
  //     // Emit the server side
  //     this.a += 1
  //     this.$options.sockets.emit("join", { a: 5, b: 3 });
  //   },
  //   connect: function () {
  //     this.$options.sockets.on('connect', function(data) {
  //       console.log('walkin disaster');
  //       socket.emit('join', 'Hello World from client');
  //     });
  //   },
  //   get: function (msg) {
  //     // this.$options.sockets.emit("messages", msg, (response) => {
  //     //   console.log(response);
  //     // });
  //     this.$options.sockets.emit("messages", msg)
  //   }
  // }
}
</script>

<style>
</style>
