var myMixin = {
  created: function () {
    this.fetchdata()
  },
  methods: {
    fetchdata(url) {
      this.$http.get(url).then(response => {
        this.items = response.body;
        console.log(response.body.inspect);
        return response.body;
      }).catch(error => {
        return error;
      });
    },
    postdata() {
      this.$http.post('http://localhost:3000/sessions').then(response => {
        this.session = response.json();
        console.log(response.json());
        return this.session;
      }).catch(error => {
        return error;
      });
    },
    // tester(){
    //   this.$http.post('http://localhost:3000/sessions').then(function(response) {
    //   this.sessions.push(this.session);
    //   console.log("Event added!");
    // }).error(function(error) {
    //   console.log(error);
    // });



    }

};

export default myMixin;
