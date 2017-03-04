<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#logo{
  width: 100px;
  height: 100px;
}

.color{
  padding: 3em;
  border-style: black 1em;
  border-radius: 0.5em;

}

.home{
  text-align: center;
}

.spec{
  text-align: center;
}

h1{
  font-weight: bold;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.2px;
  text-align: center;
}
h2{
  font-weight: bold;
  color: white;
  text-align: center;
}

.spec .vue-color__slider{
  position: relative;
  width: auto;
  padding: 1em 5em;
}

.spec .vue-color__material{
  position: relative;
  width: auto;
  padding: 1em 5em;
  text-align: center;
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

input {
  padding: 1em 1em;
  font-size: 2em;
  border-style: black;

}
