<template>
  <div class='roomAccess'>
    <div v-if="!shareKey">
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
      v-model="color"
      v-on:keyup.enter="createKey"
      placeholder="ex: Lavender blue" />
    </div>
    <div v-else>
      <socketTest :roomKey='roomKey'></socketTest>
    </div>
  </div>
</template>

<script>
import SocketTest from './SocketTest.vue'
export default {
  name: 'roomAccess',
  props: ['colorData', 'user_name', 'shareKey'],
  data: function(){
    roomKey: this.shareKey
  },
  methods: {
    createKey: function(){
      this.$root.$data.shareKey = '01010'
    }
  }
}
</script>

<style lang="css">
</style>
