<template>
  <div ref="canvasContainer" class="lead">
    <canvas height="400" style="border:2px solid black;" ref="drawCanvas"></canvas>
    <span v-bind:title="clear" class="glyphicon glyphicon-refresh" v-on:click="clearCanvas"></span>
    <br>
    <div class="buttons">
      <button v-model="y" class="ChatroomBtn" v-on:click="drawingSize1" > Thin </button>
      <button v-model="y" class="ChatroomBtn" v-on:click="drawingSize2" > Medium </button>
      <button v-model="y" class="ChatroomBtn" v-on:click="drawingSize3" > Thick </button>
      <button v-model="y" class="ChatroomBtn" v-on:click="drawingSize4" > Thicker </button>
    </div>
  </div>
</template>

<script>
  import Room                                        from './Room.vue'
  import $                                           from 'jquery'
  var canvas
  var ctx
  var y = 6

  export default {
    name: 'draw-canvas',
    props: ['drawingColor'],
    data: function(){
      return {
        flag: false,
        prevX: 0,
        prevY: 0,
        currX: 0,
        currY: 0,
        dot_flag: false,
        // y: null,
        clear: 'Clear the canvas and start over!'
      }
    },
    mounted: function() {
      canvas = this.$refs.drawCanvas;
      console.log("this is ",canvas)
      var self = this
      ctx = canvas.getContext("2d");
      canvas.width = this.$refs.canvasContainer.clientWidth;
      let w = canvas.width;
      let h = canvas.height;
      canvas.addEventListener("mousemove", function(e){
        self.findxy('move',e)
      }, false);
      canvas.addEventListener("mousedown", function(e){
        self.findxy('down', e)
      }, false);
      canvas.addEventListener("mouseup", function(e){
          self.findxy('up', e)
      }, false);
      canvas.addEventListener("mouseout", function(e){
          self.findxy('out', e)
      }, false);
    //mobile//
      canvas.addEventListener("touchstart", function(e){
        if (e.target == canvas) {
          e.preventDefault();
        }
        var touch = e.touches[0];
        console.log(touch)
        var mouseevent = new MouseEvent("mousedown",{
          clientX: touch.clientX,
          clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseevent);
      }, false);
      canvas.addEventListener("touchend", function (e) {
        if (e.target == canvas) {
          e.preventDefault();
        }
        var mouseevent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseevent);
      }, false);
      canvas.addEventListener("touchmove", function (e) {
        if (e.target == canvas) {
          e.preventDefault();
        }
        var touch = e.touches[0];
        console.log(touch)
        var mouseevent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseevent);
      }, false);
    },
    methods: {
      draw: function(){
        ctx.beginPath();
        ctx.moveTo(this.prevX, this.prevY);
        ctx.lineTo(this.currX, this.currY);
        ctx.strokeStyle = '#'+this.$root.$data.color;
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
      },
      findxy: function(res,e){
        if (res == 'down') {
          this.prevX = this.currX;
          this.prevY = this.currY;
          this.currX = e.clientX - canvas.offsetLeft;
          this.currY = e.clientY - canvas.offsetTop + window.scrollY;
          this.flag = true;
          this.dot_flag = true;
          if (this.dot_flag) {
              ctx.beginPath();
              ctx.fillStyle = '#'+this.$root.$data.color;
              ctx.fillRect(this.currX, this.currY, 2, 2);
              ctx.closePath();
              this.dot_flag = false;
          }
        }
        if (res == 'up' || res == "out") {
          this.flag = false;
        }
        if (res == 'move') {
          if (this.flag) {
            this.prevX = this.currX;
            this.prevY = this.currY;
            this.currX = e.clientX - canvas.offsetLeft;
            this.currY = e.clientY - canvas.offsetTop + window.scrollY;
            this.draw();
          }
        }
      },
      clearCanvas: function(){
        canvas.width = canvas.width;
      },
      drawingSize1: function(button){
        y = 1;
      },
      drawingSize2: function(button){
        y = 3;
      },
      drawingSize3: function(button){
        y = 5;
      },
      drawingSize4: function(button){
        y = 7;
      }
    }
  }
</script>

<style>

span{
  text-align: center;
}
.glyphicon-refresh{
  font-size: 1.8em;
}

.glyphicon-refresh:hover {
  color: red;
}
.buttons{
  display: inline;
}
.ChatroomBtn {
  width: 15%;
  border-style: 0.5em;
  border-radius: 5px;
  background-color: white;
  display: inline;
}
.ChatroomBtn:hover{
  background-color: #71EEB8;
  font-style: bold;
}
</style>
