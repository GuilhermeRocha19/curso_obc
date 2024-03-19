const Sequelize = require("sequelize");
const sequelize = new Sequelize('test','root','i****123123',{
    host:"localhost",
    dialect:"mysql"
});

sequelize.authenticate().then(()=>{
    console.log("Conectado com Sucesso");
}).catch((err)=>{
    console.log("Falha ao conectar: "+err);
});