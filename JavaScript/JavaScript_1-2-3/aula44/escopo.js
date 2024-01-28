let pokemon = "Charmander" //Escopo Externo

function evoluir(){
    pokemon = "Charmeleon" //Interno
}

//console.log(pokemon)
evoluir()
//console.log(pokemon)


function CriarAnimal(){
    // Variaveis criadas em um escopo interno, não funcionam em um escopo externo.
    let animal = "gato"
}

CriarAnimal()
//console.log(animal)

function avaliarNota(nota){
    if(nota > 60){
        var aprovado = true
        let situacao = "aprovado"
    }else{
        var aprovado = false
        let situacao = "Reprovado"
    }

    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
}



//avaliarNota(83)
//avaliarNota(49)


function ola(){
    var text = "olá mundo"
}

//console.log(text)


console.log(nome)
//console.log(sobrenome)

var nome = "isaac"
let sobrenome = "Rocha"

console.log(nome)
//console.log(sobrenome)