// module.exports = {
//     fetchData: function () {
//       this.$http.jsonp('http://localhost:3000/posts').then(response => {
//         this.items = response.body;
//         console.log(typeof(response.body));
//         return response.body;
//       }).catch(error => {
//         return error;
//       });
//     }
// };


function fetchData () {
  this.$http.jsonp('http://localhost:3000/posts').then(response => {
    this.items = response.body;
    console.log(typeof(response.body))
    return response.body
  }).catch(error => {
    return error
  });
}
