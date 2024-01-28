let valorMult = Number(prompt("Digite o valor do número que você quer saber a tabuada."))
let resultado = ""

for(let tabuada = 0; tabuada <= 20 ; tabuada++){
    resultado += `${valorMult} x ${tabuada} = ${valorMult*tabuada}\n`
}

alert(resultado)
