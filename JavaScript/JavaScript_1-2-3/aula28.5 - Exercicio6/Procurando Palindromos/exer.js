const word = prompt("Informe uma palavra: ")
let palavraInvertida = ""

for(let i = word.length - 1; i>=0; i--){
    palavraInvertida += word[i]
}

if(word === palavraInvertida){
    alert(`A palavra ${palavraInvertida} é um palindro, pois se lida de trás pra frente, continua a mesma palavra.`)
}else{
    alert(`A palavra ${palavraInvertida} não é um palindro.`)
}