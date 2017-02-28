var myMixin = {
  methods: {
    fetchdata() {
      this.$http.jsonp('http://localhost:3000/posts').then(response => {
        this.items = response.body;
        console.log(typeof(response.body));
        return response.body;
      }).catch(error => {
        return error;
      });
    },
    postdata() {
      this.$http.post('http://localhost:3000/sessions').then(response => {
        this.items = response.body;
        console.log(typeof(response.body));
        return response.body;
      }).catch(error => {
        return error;
      });
    },
    changeColor () {
      var fake = this.$faker().commerce.color();
      this.newColor = ('Yuck maybe try this one: ' + fake);
      var bgcolor = $('div.color').prop("style");
      document.querySelector("body").style = bgcolor;
    }
  }
};

export default myMixin;

