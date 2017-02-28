import myMixin from './queries.js';

var myColor = {
  mixins:[myMixin],
  methods: {
    changeColor () {
      var fake = this.$faker().commerce.color();
      this.newColor = ('Yuck maybe try this one: ' + fake);
      var bgcolor = $('div.color').prop("style");
      document.querySelector("body").style = bgcolor;
      this.postdata();
    }
  }
};

export default myColor;
