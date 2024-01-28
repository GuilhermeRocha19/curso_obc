let options = ''
let imoveis = []





do{
    
    options = prompt(`Imoveis cadastrados: ${imoveis.length}\n\n`+"Escolha a sua opção:\n1.Salvar imóvel\n2.Mostrar imóveis salvos\n3.Sair ")

    switch(options){
        case "1":
            const imovelAdd = {}
            imovelAdd.nome = prompt("Qual o nome do proprietario?")
            imovelAdd.quantQuart = prompt('Qual a quantidade de quartos?')  
            imovelAdd.quantBanh = prompt('Qual a quantidade de banheiro?') 
            imovelAdd.garagem = prompt("Possui garagem?")
            imoveis.push(imovelAdd)
            break
        
        case "2":
            for(let i = 0 ; i < imoveis.length ; i++){
                alert("Imovel" + (i+1) +
                "\nProprietario: " + imoveis[i].nome +
                "\nQuartos: " + imoveis[i].quantQuart +
                "\nGaragem: " + imoveis[i].garagem)
            }
            break



    }

    console.log(imoveis)
    

}while(options != "3")