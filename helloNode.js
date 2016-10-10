var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); 
  res.end('Olá mundo!');
}).listen(8003);
console.log('Servidor iniciado em localhost:8003. Ctrl+C para encerrar…');