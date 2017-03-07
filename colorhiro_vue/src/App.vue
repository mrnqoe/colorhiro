<template>
  <div  class="site-wrapper">
  <transition name="fade">
    <div class="site-wrapper-inner">
      <div v-if="show" class="cover-container">
        <div class="app masthead clearfix">
          <div class="inner">
            <h3 class="masthead-brand">Colorhiro</h3>
          </div>
        </div>
        <div>
        <router-view></router-view>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      share_key: null,
      show: true
    }
  }
}

</script>

<style>

.fade-leave-active {
  transition: opacity .5s
}
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

body #app {
  font-family: 'Ranga', cursive;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.site-wrapper {
  width: 100%;
  height: 100%;
  min-height: 100%;
}

.site-wrapper-inner {
  vertical-align: top;
}

.cover-container {
  margin-right: auto;
  margin-left: auto;
}

.inner {
    padding: 30px;
}

.masthead-brand {
  margin-top: 10px;
  margin-bottom: 10px;
}

.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.masthead-nav > li {
  display: inline-block;
}

navs.less:9

.nav>li {
  position: relative;
  display: block;
}

.masthead-nav > li + li {
  margin-left: 20px;
}
cover.css:70
.masthead-nav > li {
  display: inline-block;
}

navs.less:9

.nav>li {
  position: relative;
  display: block;
}

#logo{
  width: 20px;
  height: 20px;
}

.color{
  padding: 3em;
  border-style: black 1em;
  border-radius: 0.5em;

}

/*.navbar-brand>img {
  display: inline-block;
}

.navbar {
  width: 100%;
}

.navbar-default {
  background-image: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#f8f8f8));
  background-image: linear-gradient(to bottom,#403d3d 0,#000000 100%);
}
*/
/*.home{
  text-align: center;
}

.spec{
  text-align: center;
}*/

h1{
  /*font-weight: bold;*/
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.2px;
  text-align: center;
}
h2{
  /*font-weight: bold;*/
  color: white;
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
*/
a {
  color: #42b983;
}

input {
  padding: 1em 1em;
  font-size: 2em;
  border-style: black;

}

/*.wrapper {
  min-height: 100%;
  height: auto;
  margin: 0 auto -100px;
  padding-bottom: 100px;
}
.footer {
  height: 100px;
}*/

</style>
