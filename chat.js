/**
 * WebSockets Chat Demo using socket.io
 *
 * A basic node server ("backend JavaScript") that receives chat messages
 * via websockets and then emits the message to any other connections.
 * Source: https://socket.io/get-started/chat
 *
 * To use this:
 *   - Install recommended version of Node: https://nodejs.org/en/
 *   - run "npm install" in this folder from terminal (if you haven't already)
 *   - run "node chat.js" in the terminal
 *   - navigate to http://localhost:3000 in a couple browser tabs
 *   - try entering in some chat messages
 *
 * You won't be expected to write any backend code in this course, you will
 * be provided with backend code and told what WebSocket messages to expect
 * in terms of sending/receiving; but comments are provided below to explain
 * what's going on...
 *
 */

// Include the packages for http, express (web server), socket.io (web sockets)
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// when an HTTP request is made root route, send index.html as the response
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// When an IO connection is made...
io.on('connection', function(socket) {

  console.log('a user connected');

  // On this connection, recogonize "chat message" messages and handle the
  // message with this function...

  //socket.on('chat message', function(msg){
  socket.on('chat message', function({usr, msg}){
    //console.log('message: ' + msg);
    console.log(usr + "'s " + 'message: ' + msg);

    // Send chat message back to ALL connections (including the original sender)
    //io.emit('chat message', msg);
    io.emit('chat message', {'usr': usr, 'msg':msg});

  });

  // If a user disconnects, output this to the console...
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

// start the HTTP server on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});
