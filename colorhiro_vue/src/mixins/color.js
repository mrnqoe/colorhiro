import myMixin from '../mixins/queries.js';

var myColor = {
  mixins:[myMixin],
  methods: {
    changeColor () {
      var fake = this.$faker().commerce.color();
      this.newColor = ('Yuck maybe try this one: ' + fake);
      var bgcolor = $('div.color').prop("style");
      document.querySelector("body").style = bgcolor;
    }
    // ,
    // addsession () {
    //   var color = this.newColor;
    //   this.$http.post('api/sessions').then((response) => {
    //     console.log(response.message);
    //   });
    // }

  }
};

export default myColor;
