export function post_data(http, url, data){
  console.log(data);
  new Promise(function(resolve){
    http.post(url, data, {
       emulateJSON: true
     })
      .then(function(response){
        console.log('response');
        return response
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

export function get_data(http, url, data){
  new Promise(function(resolve){
    http.get(url, data, {
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