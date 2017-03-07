<template>
  <div class='RoomAccess'>
    <div class="inner cover">
      <h1>ROOM ACCESS</h1>
      <div v-if="!user_name">
        <h1>ENTER A USERNAME</h1>
      </div>
      <div v-else-if="!colorData" class="">
        <h1>COLOR NAME PROMPT</h1>
      </div>
      <div v-else>
        <h1>ROOM ACCESS LINK</h1>
      </div>
      <div class="lead form-group form-group-lg">
        <input
          class="form-control"
          type="text"
          v-model="name0"
          v-on:keyup.enter="createKey($event.target.value)"
          placeholder="Please print your name"
          autofocus
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RoomAccess',
  props: ['colorData', 'user_name', 'shareKey'],
  data: function(){
    return{
      name0: '',
      roomKey: this.shareKey
    }
  },
  methods: {
    createKey: function(val){
      this.$root.$data.name = val
      this.roomKey = '01010'
    }
  }
}
</script>

<style lang="css">

.form-group-lg .form-control {
  text-align: -webkit-center;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
}

</style>
