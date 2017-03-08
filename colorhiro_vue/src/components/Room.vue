<template>
  <div class="container-fluid">
    <div class="Room">
      <i v-show="loading" class="fa fa-spinner fa-spin"></i>
        <h4 class="colorChosen" :style="{ 'background-color': '#'+ this.color }">
          {{ name }}
        </h4>
        <div v-if="chatting" id="roomContent">
        <!-- <div class="onlineUserBox"> -->
          <!-- <div id="currentUser">
            <h3>Online Users</h3>
            <ul v-for="user in users">
              <li>
                {{ user.name }}
                <p
                class="usersColor"
                :style="{ 'background-color': user.color }">
                </p>
              </li>
            </ul>
          </div> -->
        <!-- </div> -->
        <div class="container chatBox" >
          <div class="container msgs" v-model="msgList" v-for="msg in msgList">
            <span v-if="name"> {{ name }} :</span>
            <span v-else-if="!name"> Unknown-user : </span>
            <span> {{ msg }} </span>
          </div>
        </div>
          <div class="lead form-group">
            <input
              class="form-control"
              v-on:keyup.enter="send"
              v-model="msg"
              autofocus
              />
          </div>
        <button v-show="drawBtn"v-on:click="toggleCanvas()" class="ToggleChatroomBtn">DRAW</button>
      </div>
      <div v-else>
        <draw-canvas></draw-canvas>
          <br>
        <button
        v-show="hideCanvasBtn"
        v-on:click="toggleCanvasUp()"
        class="ToggleChatroomBtn">
        HIDE CANVAS
        </button>
      </div>
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
      msg: '',
      msgList: [],
      // users: userGenerator(),
      color: this.$root.$data.color,
      hideCanvasBtn: false,
      drawBtn:true,
      chatting: true
    }
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
      console.log(this.$socket);
    },
    message: function(val){
      this.msgList.push(val);
      val = '';
      console.log("value: ", val)
    }
  },
  methods: {
    test0: function(){
      console.log(this.$root);
    },
    send: function(event){
      this.msgList.push(this.msg)
      this.msg ='';
      this.$socket.emit('message', this.msg, function(response) {
        console.log(response);
      }.bind(this));
    },
    // add: function () {
    //   // Emit the server side
    //   // this.$options.sockets.emit("join", { a: 5, b: 3 });
    // },
    connect: function () {
      console.log('hello');
      return 'hello'
    },
    get: function (msg) {
      // this.$options.sockets.emit("messages", msg, (response) => {
      //   console.log(response);
      // });
      this.$options.socket.emit("messages", msg)
    },
    toggleCanvas: function(){
      this.hideCanvasBtn = true
      this.drawBtn = false
      this.chatting = false
    },
    toggleCanvasUp: function(){
      this.drawBtn = true
      this.hideCanvasBtn = false
      this.chatting = true
    }
  }
}
</script>

<style>

#currentUser{
  float: right;

}
.onlineUserBox{
  float: right;
  width: 20%;
}

.ToggleChatroomBtn {
  width: 100%;
  border-style: 0.5em;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 5em;
}
.ChatroomBtn:hover{
  background-color: #71EEB8;
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
/*.chatBox{
  width: 80%;
  height: 40%;
  overflow: none;
  position: relative;

}

.msgs{
  overflow: auto;
  position: absolute;
  max-height: 40%;
}*/
</style>

