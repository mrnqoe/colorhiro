var socket, host;
host = "ws://localhost:3001";


function addMessage(msg) {
  $("#chat-log").append("" + msg + "");
}

function connect() {
  try {
    socket = new WebSocket(host);

    addMessage("Socket State: " + socket.readyState);

    socket.onopen = function() {
      addMessage("Socket Status: " + socket.readyState + " (open)");
    }

    socket.onclose = function() {
      addMessage("Socket Status: " + socket.readyState + " (closed)");
    }

    socket.onmessage = function(msg) {
      addMessage("Received: " + msg.data);
    }
  } catch(exception) {
    addMessage("Error: " + exception);
  }
}

function send() {
  var text = $("#message").val();
  if (text == '') {
    addMessage("Please Enter a Message");
    return;
  }

  try {
    socket.send(text);
    addMessage("Sent: " + text)
  } catch(exception) {
    addMessage("Failed To Send")
  }

  $("#message").val('');
}

$('#message').keypress(function(event) {
  if (event.keyCode == '13') { send(); }
});

$(function() {
  connect();
});

$("#disconnect").click(function() {
  socket.close()
});
