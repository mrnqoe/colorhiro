export function tester($http,sessions){
  return new Promise(function(resolve){
    console.log($http);
    $http.post('http://localhost:3000/sessions')
      .then(function(response){
        return response.json()
      })
      .then(function(json) {
        resolve(json);
        console.log("Event added!");
      }).catch(function(error) {
      console.log(error);
    })
  })

}
