const Sequelize = require("sequelize");
const sequelize = new Sequelize('test','root','ich@RG2022',{
    host:"localhost",
    dialect:"mysql"
});

sequelize.authenticate().then(()=>{
    console.log("Conectado com Sucesso");
}).catch((err)=>{
    console.log("Falha ao conectar: "+err);
});

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})



const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    data_nascimento:{
        type: Sequelize.DATE
    }

})

Usuario.create({
    nome:"Guts",
    sobrenome:"Talis",
    email: "guts.revenge@gmail.com",
    data_nascimento: '1759-08-09'
})

