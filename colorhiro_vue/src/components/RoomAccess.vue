<template>
  <div class='RoomAccess'>
    <h1>ROOM ACCESS</h1>
    <div v-if="!user_name">
      <h1>USER NAME PROMPT</h1>
    </div>
    <div v-else-if="!colorData" class="">
      <h1>COLOR NAME PROMPT</h1>
    </div>
    <div v-else>
      <h1>ROOM ACCESS LINK</h1>
    </div>
    <input
    type="text"
    v-model="name0"
    v-on:keyup.enter="createKey($event.target.value)"
    placeholder="ex: Lavender blue" />
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
</style>
