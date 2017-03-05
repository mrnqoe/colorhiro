<template>
  <div class="app">
    <header>
      <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand">
          <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-right" alt="">Colorhiro</a>
      </nav>
    </header>
    <div>
    <router-view></router-view>
    </div>
    <footer>
      <nav class="navbar navbar-default navbar-fixed-bottom">
        <div class="container">
          <ul class="bs-docs-footer-links">
            <li>
              <a href="https://www.facebook.com/scott.farmer.35325">Facebook</a>
            </li>
            <li>
              <a href="https://github.com/scottfarmer2">Github</a>
            </li>
            <li>
              <a href="https://twitter.com/ScottFarmerrrr">Twitter</a>
            </li>
          </ul>
          <p>Our thanks to colorname for their unreal list of color names</p>
        </div>
      </nav>
    </footer>
   <!--  <footer>
      <nav class="navbar navbar-default navbar-fixed-bottom">
        <div class="container panel-footer clearfix">
          <ul class="bs-docs-footer-links">
            <li>
              <a class="btn btn-social-icon btn-facebook" href="https://www.facebook.com/scott.farmer.35325">
                <span class="fa fa-facebook"></span>
              </a>
            </li>
            <li>
              <a class="btn btn-social-icon btn-github" href="https://github.com/scottfarmer2">
                <span class="fa fa-github"></span>
              </a>
            </li>
            <li>
              <a class="btn btn-social-icon btn-twitter" href="https://twitter.com/ScottFarmerrrr">
                <span class="fa fa-twitter"></span>
              </a>
            </li>
        </div>
      </nav>
    </footer> -->
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>

html {

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

#logo{
  width: 20px;
  height: 20px;
}

.color{
  padding: 3em;
  border-style: black 1em;
  border-radius: 0.5em;

}

.navbar-brand>img {
  display: inline-block;
}

.navbar {
  width: 100%;
}

.navbar-default {
  background-image: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#f8f8f8));
  background-image: linear-gradient(to bottom,#403d3d 0,#000000 100%);
}

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

.spec .vue-color__slider{
  position: relative;
  width: auto;
  padding: 1em 5em;
}

.spec .col-xs-6 .col-md-6 .text-center .vue-color__swatches{
  position: relative;
  width: auto;
  height: auto;
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

.wrapper {
  min-height: 100%;
  height: auto;
  margin: 0 auto -100px;
  padding-bottom: 100px;
}
.footer {
  height: 100px;
}

</style>
