// initialize app to be a function handler
var app = require('express')();
// applay initialized handler to HTTP server
var http = require('http').Server(app);
// initialize a new instance of socket.io by passing the http server object in
var io = require('socket.io')(http);

// define a route to get called when home page is visited
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// listen on the connection event for incoming sockets
io.on('connection', function(socket) {
  console.log('user connected');
  // listen on the disconnection event from the client
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

io.on('connection', function(socket) {
  // listen on the chat message event from the client
  socket.on('chat message', function(msg) {
    console.log('message: ' + msg);

    // send message to all socket clients
    io.emit('chat message', msg);

    // use this if you need to send msg to everyone except for this socket
    // socket.broadcast.emit('chat message', msg);
  });
});

// make http server to listen on port 3000
http.listen(3000, function() {
  console.log('listening on *:3000');
});
