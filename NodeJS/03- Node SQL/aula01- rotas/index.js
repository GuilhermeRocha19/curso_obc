const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send('<h1>Seja bem vindos!</h1>')
})

app.get('/sobre',(req,res)=>{
    res.send("Minha pagina sobre");
})
app.get('/blog',(req,res)=>{
    res.send("Bem vindo ao meu blog");
})

app.get('/ola/:nome/:profissao/:hobby',function(req,res){
    res.send(`Olá ${req.params.nome}<br>Profissao: ${req.params.profissao}<br>Hobby: ${req.params.hobby}`)
})

app.listen(8081,()=>{
    console.log("Servidor Rodando na url http://localhost:8081");
});