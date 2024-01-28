function calcular (a, b , operacao){
    console.log("Realizando uma operacao")
    const resultado = operacao(a,b)
    return resultado
}

function somar (x,y){
    console.log("realizando uma soma")
        return x+y
    
}

console.log(calcular(3,5,somar))

console.log(calcular(8, 4,function(x, y){
    console.log("Realizando uma subtração.")
    return x-y
}))

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,indice,array
    })
}

const lista = ["maça", "banana", "Laranja" , "Limão"]

for(let i = 0 ; i< lista.length; i++){
    exibirElemento(lista[i], i , lista) // igual ao forEach)
}

lista.forEach(exibirElemento)

lista.forEach(function(elemento,index,array){
    console.log({elemento,index, array})
})
