export default function () {
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
      postdata(url) {
        this.$http.post(url).then(response => {
          this.session = response.json();
          console.log(response.json());
          return this.session;
        }).catch(error => {
          return error;
        });
      }
    }
  }
};
