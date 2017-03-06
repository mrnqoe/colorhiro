<template>

  <canvas height="500" width="800" style="border:2px solid black;" ref="drawCanvas"></canvas>

</template>

<script>
  import Room                                        from './Room.vue'

  var canvas
  var ctx
  var x = "black";
  var y = 2;

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
      }
    }

  }

</script>

<style>

</style>