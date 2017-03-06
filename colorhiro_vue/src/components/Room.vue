<template>
  <div class="Room">
    <i v-show="loading" class="fa fa-spinner fa-spin"></i>
    <h4>{{ name }}</h4>
    <div id="roomContent" class="container">
      <div class="container msgContainer" v-model="msgList" v-for="msg in msgList">
        <span> {{ name }} : </span> <span> {{ msg }} </span>
      </div>

      <div id="currentUser">
        <h3>Online Users</h3>
        <ul v-for="user in users">
          <li>
            {{ user.name }} <p class="usersColor" :style="{ 'background-color': user.color }">  </p>
          </li>
        </ul>
      </div>

      <!-- <button v-on:click="send">Add 1</button>
      <p>The button above has been clicked {{ a }} times.</p> -->

    </div>
    <input class="msgInput" v-on:keyup.enter="send" v-model="msg">
  </div>
</template>

<script>
import VueSocketio from 'vue-socket.io';
import userGenerator from '../helpers/userGenerator.js'

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
      msg: 'example msg',
      msgList: [],
      users: userGenerator()
    }
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    message: function(val){
      this.msgList.push(val)

      console.log("value: ", val)
    }
  },
  methods: {
    test0: function(){
      console.log(this.$root);
    },
    send: function(event){
      // this.msg = {
      // content: this.msg
      // }
      this.a += 1
      this.$socket.emit('message', this.msg, function(response) {
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
#currentUser{
  float: right;
}
.msgInput{
  float: bottom;
}
.usersColor{
  height: 5px;
  font-weight: 5px;
  border-radius: 50%;
}
.msgContainer{
  float: top;
}
</style>
