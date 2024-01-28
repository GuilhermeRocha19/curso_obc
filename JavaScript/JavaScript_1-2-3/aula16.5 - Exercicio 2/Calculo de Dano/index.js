let nomePersonagem = prompt("Digite o nome do seu personagem: ")
let danoPersonagem = Number(prompt("Digite o poder de dano do seu personagem: "))


let nomeVilao = prompt("Digite o nome do vilao: ")
let vidaVilao = Number(prompt("Digite os pontos de vida do vilao: "))
let defesaVilao = Number(prompt("Poder de defesa do vilao: "))
let escudoVilao = confirm("O vilão possui escudo?")
let danoSemEscudo = danoPersonagem - defesaVilao 
let danoComEscudo = danoSemEscudo / 2
if(danoPersonagem > defesaVilao && escudoVilao == false){
    alert(`
    O ${nomePersonagem} Possui ${danoPersonagem} de dano.
    O ${nomeVilao} Possui ${vidaVilao} de vida.
    ${nomeVilao} não possui escudo.
    O dano causado no ${nomeVilao} foi de ${danoSemEscudo}.
     Agora o vilão possui apenas ${vidaVilao - danoSemEscudo}`)
}else if(danoPersonagem > defesaVilao && escudoVilao == true){
    alert(`
    O ${nomePersonagem} Possui ${danoPersonagem}.
    O ${nomeVilao} Possui ${vidaVilao} de vida.
    ${nomeVilao} possui um escudo.
    O dano causado no ${nomeVilao} foi de ${danoComEscudo}.
     Agora o vilão possui apenas ${vidaVilao - danoComEscudo}`)
}else{
    alert(`
    O ${nomePersonagem} Possui ${danoPersonagem}.
    O ${nomeVilao} Possui ${vidaVilao} de vida.
    O dano causado no ${nomeVilao} foi de 0.
    Agora o vilão possui ${vidaVilao}`)
}
