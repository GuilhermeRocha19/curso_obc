var http = require('http');

http.createServer((req,res)=>{
    res.end("Olá")
}).listen(8081)

console.log("Servidor Rodando")