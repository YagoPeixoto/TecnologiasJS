var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });//se mudar o text/plain para text/html voce pede usar tags html dentro do codigo
  res.end('<h1>Olá mundo!</h1>');
}).listen(8003);
console.log('Servidor iniciado em localhost:8003. Ctrl+C para encerrar…');