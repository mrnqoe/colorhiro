var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var env = require('dotenv').config();
// const PORT = process.env.port;

var visitorsData = {};

app.use(express.static(__dirname + '/node_modules'));

// app.get('/', function(req, res, next) {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function(socket){
  console.log('socket connected');
  socket.emit("message");
  // console.log(socket.request);
  socket.on('join', function(data) {
    console.log(data);
  });

  // var interval = setInterval(function () {
  //   socket.emit("tweet", 'tweet');
  //   console.log(Date.now().toString());
  // }, 1000);

  socket.on('message', function(data) {


    // const chatMsg = JSON.parse
    console.log("this is the data : ", data);
    // console.log(socket.server);
    socket.send(data);

    // socket.emit('broad', data);
    // socket.broadcast.emit('broad',data);
  });

  socket.on('connect', function(data) {
    console.log(data);

  });

  // socket.emit('join', 'Hello World from socket');
  socket.on('event', function(data){
    console.log('event');
  });

  socket.on('disconnect', function(){
    console.log('disconnected');
  });
});

server.listen('http://socketserver.com:1923');

