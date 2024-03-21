const Sequelize = require("sequelize");
const express = require("express");
const handlebars = require("express-handlebars").create({ defaultLayout: 'main' })
const app = express();



// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars')

    //Conexão com o banco de dados MySql
    const sequelize = new Sequelize('cadastroDePostagens','root', 'ich@RG2022',{
        host:'localhost',
        dialect:'mysql'
    })    
// Rotas

    app.get('/cadastro_post',(req,res)=>{
        res.render('formulario')
    })



app.listen(8081,()=>{
    console.log("Servidor Rodando na url http://localhost:8081");
});