<template>
  <div ref="canvasContainer">
    <canvas height="400" style="border:2px solid black;" ref="drawCanvas"></canvas>
    <button type="button" class="btn btn-outline-danger btn-block" v-on:click="clearCanvas"> Clear </button>
    <div class="btn-group btn-group-justified">
      <a v-model="y" class="btn btn-default" v-on:click="drawingSize1" > size 1 </a>
      <a v-model="y" class="btn btn-default" v-on:click="drawingSize2" > size 2 </a>
      <a v-model="y" class="btn btn-default" v-on:click="drawingSize3" > size 3 </a>
      <a v-model="y" class="btn btn-default" v-on:click="drawingSize4" > size 4 </a>
    </div>
  </div>
</template>

<script>
  import Room                                        from './Room.vue'
  import $                                           from 'jquery'
  var canvas
  var ctx
  var y
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
        dot_flag: false
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
        console.log("mouse", e.clientX, e.clientY)
        self.findxy('move',e)
      }, false);
      canvas.addEventListener("mousedown", function(e){
        console.log("mouse", e.clientX, e.clientY)
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
</style>
