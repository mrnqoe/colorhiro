export function post_data(http, data){
  console.log(data);
  new Promise(function(resolve){
    http.post('http://localhost:3000/sessions', data, {
       emulateJSON: true
     })
      .then(function(response){
        console.log(response);
        return response.json()
      })
      .then(function(json) {
        resolve(json);
        console.log("Event added!");
      }).catch(function(error) {
        return error
      console.log(error);
    })
  })
}

export function get_data(http, url){
  new Promise(function(resolve){
    http.get('http://localhost:3000/sessions', data, {
       emulateJSON: true
     })
      .then(function(response){
        console.log(response);
        return response.json()
      })
      .then(function(json) {
        resolve(json);
        console.log("Event added!");
      }).catch(function(error) {
        return error
      console.log(error);
    })
  })
}
