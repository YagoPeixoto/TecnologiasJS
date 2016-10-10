var frase;
 
carregaFrase = function (callback) {  
  setTimeout(function() {
    //Simula leitura da frase no banco de dados.
    frase = "Minha frase obstrutiva";
    callback();
  }, 3000)
}
 
imprimeFrase = function () {
  console.log(frase);
}
 
carregaFrase(imprimeFrase);
 
console.log(“Olá"); 
//a frase  Olá será impressa primeiro pois não depende de nada já a string da variavel frase leva um certo tempo de execução