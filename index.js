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

// make http server to listen on port 3000
http.listen(3000, function() {
  console.log('listening on *:3000');
});
