let nome = prompt("Qual seu nome?")
let visitou = prompt("Você ja visitou alguma cidade? sim ou nao?")
let quantCidade = 0
let cidade = ""
while(visitou == "sim"){
    let cidades = prompt("Qual o nome dessa cidade?")
    cidade += cidades +"\n"
    quantCidade+=1
    visitou = prompt("Você visitou mais alguma? sim ou nao?")
}

alert(`Que demais ${nome}, você visitou ${quantCidade} cidades\n entre elas ${cidade}`)


