let valorConta = Number(prompt("Digite a quantidade de dinheiro incial disponivel"))
let options = ""

let valorAcao = ""
do{
    options = prompt("O que você gostaria de fazer na sua conta? \n1 - Sacar\n2 - Depositar\n3 - Cancelar")

    if(options == "1"){
        valorAcao = prompt("Quanto você quer sacar?")

        alert(`Você ficou com um valor de ${valorConta - valorAcao}.`)
    }else if(options == 2){
        valorAcao = prompt("Quanto você quer depositar?")

        alert(`Você ficou com um valor de ${valorConta + parseFloat(valorAcao)}.`)
    }

}while (options !== "3")

alert("Sua operação foi finalizada.")

