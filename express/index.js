//Importando express
const { response } = require("express");
const express = require("express");

//Inicializando express
const app = express();

app.get("/", function(req, res){
    res.send("Hell`o World");
});

// Parâmetros não obrigatórios
app.get("/app/blog/:artigo?", function(req, res){
    var artigo = req.params.artigo;
    res.send(artigo?"Artigo: "+artigo:"Hell`o Blog");
});

//Query Param
app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"];

    res.send(canal?"Canal: "+canal:"Hell`o Youtube");
});

// Parâmetros obrigatórios
app.get("/ola/:nome/:empresa", function(req, res){
    var nome = req.params.nome;
    var empresa = req.params.empresa;

    res.send("<h1>Oi, "+nome+" do grupo "+empresa+"</h1>");
});

app.listen(8181, function(erro){
    if(erro){
        console.log("Ocorreu um erro.");
    }
    else{
        console.log("Servidor inicializado com sucesso.");
    }
});