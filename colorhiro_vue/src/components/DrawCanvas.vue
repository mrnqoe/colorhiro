<template>
  <canvas height="auto" width="auto" style="border:2px solid black;" ref="drawCanvas"></canvas>
</template>

<script>
  import Room                                        from './Room.vue'

  var canvas
  var ctx
  var x = "black";
  var y = 1;

  export default {
    name: 'draw-canvas',
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
      canvas.addEventListener("touchstart", function(e){
        if (e.target == canvas) {
          e.preventDefault();
        }
        mousePost = getTouchPost(canvas, e);
        var touch = e.touches[0];
        var touchevent = new TouchEvent("mousedown",{
          clientX: touch.clientX,
          clientY: touch.clientY
        });
        canvas.dispatchEvent(moustEvent);
      }, false);
      canvas.addEventListener("touchend", function (e) {
        if (e.target == canvas) {
          e.preventDefault();
        }
        var touchevent = new TouchEvent("mouseup", {});
        canvas.dispatchEvent(touchevent);
      }, false);
      canvas.addEventListener("touchmove", function (e) {
        if (e.target == canvas) {
          e.preventDefault();
        }
        var touch = e.touches[0];
        var touchevent = new TouchEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
        });
        canvas.dispatchEvent(touchevent);
      }, false);

    },
    methods: {

      draw: function(){
        ctx.beginPath();
        ctx.moveTo(this.prevX, this.prevY);
        ctx.lineTo(this.currX, this.currY);
        ctx.strokeStyle = x;
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
      },
      findxy: function(res,e){
        if (res == 'down') {
          this.prevX = this.currX;
          this.prevY = this.currY;
          this.currX = e.clientX - canvas.offsetLeft;
          this.currY = e.clientY - canvas.offsetTop;
          this.flag = true;
          this.dot_flag = true;
          if (this.dot_flag) {
              ctx.beginPath();
              ctx.fillStyle = x;
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
            this.currY = e.clientY - canvas.offsetTop;
            this.draw();
          }
        }
      },
      getTouchPost: function(canvasDom, touchEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
          x: touchEvent.touches[0].clientX - rect.left,
          y: touchEvent.touches[0].clientY - rect.top
        };
      }
    }
  }
</script>

<style>

canvas{
  display:block;
}
</style>
