<template>
  <div class="socketTest">
    <p>sockets</p>
    <h1>{{ test }}</h1>
    <h1>{{ roomKey }}</h1>
  </div>
</template>

<script>
export default {
  name: 'socketTest',
  props: ['roomKey'],
  data: function () {
    test: null
  },
  methods: {
    add() {
        // Emit the server side
        this.$socket.emit("add", { a: 5, b: 3 });
    },
    // connect() {
    //   this.$socket.on("changed", (msg) => {
    //     console.log(msg);
    //   });
    // },
    get() {
        this.$socket.emit("get", { id: 12 }, (response) => {
          console.log(response);
        });
    }
  },
  socket: {
    // Prefix for event names
    // prefix: "/counter/",
    // If you set `namespace`, it will create a new socket connection to the namespace instead of `/`
    // namespace: this.room_key,

    events: {

      // Similar as this.$socket.on("changed", (msg) => { ... });
      // If you set `prefix` to `/counter/`, the event name will be `/counter/changed`
      //
      changed(msg) {
          console.log("Something changed: " + msg);
      },

      // common socket.io events
      connect() {
        console.log("Websocket connected to " + this.$socket.nsp);
      },

      disconnect() {
        console.log("Websocket disconnected from " + this.$socket.nsp);
      },

      error(err) {
        console.error("Websocket error!", err);
      }
    }
  }
}
</script>

<style>
</style>
