const express = require('express');
const path = require('path')

let app = express();

app.use(express.static('public'));

app.set('puerto',process.env.PORT || 3030)

app.listen(app.get('puerto'), ()=> console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));


app.get('/', function(req, res){  
    let htmlPath = path.resolve(__dirname,'./views/index.html');
    res.sendFile(htmlPath); 
});

app.get('/babbage', function(req, res){  
    let htmlPath = path.resolve(__dirname,'./views/babbage.html');
    res.sendFile(htmlPath); 
});

app.get('/berners-lee', function(req, res){  
    let htmlPath = path.resolve(__dirname,'./views/berners-lee.html');
    res.sendFile(htmlPath); 
});

app.get('/clarke', function(req, res){  
    let htmlPath = path.resolve(__dirname,'./views/clarke.html');
    res.sendFile(htmlPath); 
});

app.get('/hamilton', function(req, res){  
    let htmlPath = path.resolve(__dirname,'./views/hamilton.html');
    res.sendFile(htmlPath); 
});

app.get('/hopper', function(req, res){  
    let htmlPath = path.resolve(__dirname,'./views/hopper.html');
    res.sendFile(htmlPath); 
});

app.get('/lovelace', function(req, res){  
    let htmlPath = path.resolve(__dirname,'./views/lovelace.html');
    res.sendFile(htmlPath); 
});

app.get('/turing', function(req, res){  
    let htmlPath = path.resolve(__dirname,'./views/turing.html');
    res.sendFile(htmlPath); 
});






