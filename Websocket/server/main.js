var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [{
	text: "", 
	author: ""
}]

app.use(express.static('public'));


io.on('connection', function(socket){
	console.log('Alguem conectando com o socket 111');
	// socket.emit('messages', messages);

	socket.on('new-message', function(data) {
	    messages.push(data);

	    io.sockets.emit('messages', messages);
	});
});

server.listen(8000, function () {
	console.log("Servidor rodando em localhost:8000");
});
