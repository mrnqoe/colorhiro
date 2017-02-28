var myMixin = {
  methods: {
    fetchdata(url) {
      this.$http.json(url).then(response => {
        this.items = response.body;
        console.log(response.body.inspect);
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
    }

  }
};

export default myMixin;

