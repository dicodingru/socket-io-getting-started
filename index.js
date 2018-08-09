// initialize app to be a function handler
var app = require('express')();
// applay initialized handler to HTTP server
var http = require('http').Server(app);

// define a route to get called when home page is visited
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// make http server to listen on port 3000
http.listen(3000, function() {
  console.log('listening on *:3000');
});
