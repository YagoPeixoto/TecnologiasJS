var socket = io.connect('http://localhost:8000', {'forceNew': true});

socket.on('messages', function(data){
	render(data);
});

function render(data){
	var html = data.map(function(elem, index){
		var elemento = '<div><strong>' + elem.author + '</strong> <em>' + elem.text + '</em></div>';
        return(elemento)
    }).join(" ");

    document.getElementById('messages').innerHTML = html;
}

function enviarMensagem(texto){

	var mensagem = {
		author: document.getElementById('usuario').innerHTML,
		text: texto
	};

	socket.emit('new-message', mensagem);
	document.getElementById('texto').value = ""
	return false;
}

function logUsuario(objeto){
	var logUsuario = document.getElementById('inicio').style.display = "none";
	var chat = document.getElementById('content');
	chat.style.display = "block";

	var usuario = document.getElementById('usuario');
	usuario.innerHTML = objeto;
}
