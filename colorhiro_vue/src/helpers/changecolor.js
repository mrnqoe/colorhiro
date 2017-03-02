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

