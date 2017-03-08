<template>
  <div class="container-fluid">
    <div class="Room">
      <!-- <i v-show="loading" class="fa fa-spinner fa-spin"></i> -->
      <div>
        <h4>
          {{ name }} <div class="colorChosen" :style="{ 'background-color': '#'+ this.color }"></div>
        </h4>
      </div>
      <div id="roomContent">
        <div class="col-lg-6">
          <div class="container msgContainer" v-for="msg in msgList">
            <span> {{ name }} : </span> <span> {{ msg }} </span>
          </div>

          <div class="lead form-group">
            <input
              class="form-control"
              v-on:keyup.enter="send"
              v-model="msg">
          </div>
        </div>
        <div class="col-lg-6">
          <div id="currentUser">
            <h3>Online Users</h3>
            <ul class="list-inline">
              <li v-for="user in users">
                {{ user.name }} <p class="usersColor" :style="{ 'background-color': user.color }">  </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <draw-canvas></draw-canvas>
    </div>
  </div>
</template>

<script>
// import VueSocketio from 'vue-socket.io';
import userGenerator from '../helpers/userGenerator.js'
import DrawCanvas from './DrawCanvas'
export default {
  name: 'Room',
  components: {
    'draw-canvas': DrawCanvas
  },
  props: ['roomKey'],
  data: function () {
    return {
      loading: true,
      test: null,
      name: this.$root.$data.name,
      a: 0,
      id: null,
      msg: 'type in your message',
      msgList: [],
      users: userGenerator(),
      color: this.$root.$data.color
    }
  },
  sockets:{
    // connect: function(val){
    //   if(val) { console.log('socket connected -> val: ', val); }
    //   else    { console.log('socket connected'); }
    // },
    connect: function(){
      console.log('socket connected')
      console.log(this.$socket);
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

span .colorChosen {
  height: 20px;
  width: 50px;
  display: inline-block;
  border-radius: 20px;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 0;
  text-align: -webkit-right;
}

.usersColor {
  height: 1em;
  width: 4em;
  border-radius: 8%
}

.msgInput{
  float: bottom;
}
.usersColor{
  height: 1em;
  width: 1em;
  font-weight: 5px;
  border-radius: 50%;
}
.msgContainer{
  float: top;
  position: fixed;
  height: 30em;
}
</style>
