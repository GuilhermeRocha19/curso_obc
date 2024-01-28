const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  // Map: 
  //Mapeamento de um array existente, assim podendo criar um novo a partir do já criado

                    //const nomes = []
                    //for (let i = 0 ; i < personagens.length; i++){
                        //nomes.push(personagens[i].nome)
                    //}
                    //console.log(nomes) // array Nomes recebeu apenas o nome dos objetos no array Personagens

 const nomes = personagens.map(function(personagem){
    return personagem.nome
 })                   

 console.log(nomes) //// array Nomes recebeu apenas o nome dos objetos no array Personagens





 //Filter
 //filtrar e Selecionar elementos especificos de um array existente, e cria um novo array com esses elementos.

                        //const orcs = []

                        /* for (let i = 0; i < personagens.length; i++) {
                            if(personagens[i].raca === "Orc"){
                                orcs.push(personagens[i])
                            }
                            
                        }

                        console.log(orcs) */

const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"
})  

console.log(orcs) // Filtrou e selecionou a raca orc, que estava no objeto dentro de personagens.





//Reduce
//Metodo para transformar array, método mais complicado, ele serve para transformar um array em algum outro valor.

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
},0)

console.log(nivelTotal)

const racas = personagens.reduce(function(valorAcumulado, personagem){
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    }else{
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
},{})

console.log(racas)


// Sort (Ordenar) Pegar elementos de um array e ordenar de acordo com um critério

// 1,2,4,7,3,0

personagens.sort(function(a , b){
    return b.nivel - a.nivel
})

console.log(personagens)