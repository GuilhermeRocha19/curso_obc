function dobro(x){
    alert("O dobro de " + x + " é " + (x*2))
}

//dobro(8)

//dobro()

function ola(name = "Isaac"){
    alert("Ola, " + name)
}

//ola("Guilherme")
//ola()

function soma(a,b){
    alert(`Resultado da soma é ${a+b}`)
}

//soma(7,6)


function criarUsuario(nome,email,senha,tipo = "admin"){
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario)
}

function novoUs(nome,tipo = "admin",email,senha){
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario)
}

//criarUsuario("isaac", "isaac@email.com", "1234")
//novoUs("isaac", "isaac@email.com", "1234")

function muitosParametros(nome, telefone, endereço, aniversario,email,senha){
    //.....
}
function objetoComoParametro(usuario){
    //.....
    usuario.nome
    usuario.email
}

muitosParametros("Nome","telefone","10/01/2002", "a@gmail.com", "senha")


const dadosdoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    aniversario: "",
    senha: ""
    

}

objetoComoParametro(dadosdoUsuario)
