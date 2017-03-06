export function changecolor () {
      var fake = this.$faker().commerce.color();
      this.newColor = ('Yuck maybe try this one: ' + fake);
      var bgcolor = $('div.color').prop("style");
      document.querySelector("body").style = bgcolor;
      console.log("triggered")
    }
  // export function getColorSpecs (vue-color,color) {
  //   this.newColor = ('Yuck maybe try this one: ' + fake);
  //   var bgcolor = $('div.color').prop("style");
  //   document.querySelector("body").style = bgcolor;
  //   console.log("triggered")
  // }

// export function changeFontColor() {
//   var hex = $('div.thumbnail').css('background-color').replace('hex(', '').replace(')','' ).split(',').map(Number);
//   var o = Math.round(((hex[0] * 299) + (hex[1] * 587) + (hex[2] * 114)) /1000);
//   if(o > 125) {
//     $('.thumbnail h1').css('color', 'black');
//     $('.thumbnail-default .thumbnail-toggle').css('color', 'black');
//   } else {
//     $('.thumbnail h1').css('color', 'white');
//     $('.thumbnail-default .thumbnail-toggle').css('color', 'white');
//   }
// }
