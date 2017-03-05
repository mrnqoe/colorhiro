const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', function(client){
  console.log('connected');
  console.log(client.handshake);
  client.on('event', function(data){
    // console.log(data);
  });
  client.on('disconnect', function(){
    console.log('disconnected');
  });
});
server.listen(5000);
