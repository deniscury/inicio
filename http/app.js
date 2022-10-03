var http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end("Hell`o World");
}).listen(8181);