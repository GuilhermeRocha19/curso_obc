let options = ''
const pi = 3.14

do{
    options = prompt("Qual das opções você quer seguir?" +
    "\n1- Área do Triângulo."+
    "\n2- Área do Retângulo."+
    "\n3- Área do Quadrado."+
    "\n4- Área do Trapézio."+
    "\n5- Área do Circulo."+
    "\n6- Sair")

    switch(options){
        case "1":   //Area do triangulo
            function aTriangulo(base,altura){
                let calculo = (base * altura)/2
                return calculo
            }
            let baseT = prompt("Qual o valor da base do triangulo?")
            let alturaT = prompt("Qual o valor da altura do triangulo?")
            let valoresT = aTriangulo(baseT , alturaT)
            
            
            alert("A área do triângulo é igual a: " + valoresT)
            break

        case "2": //Área do Retângulo
            function aRetangulo(base , altura){
                let calculo = base * altura
                return calculo
            }
            let baseR = prompt("Qual o valor da base do Retangulo?")
            let alturaR = prompt("Qual o valor da altura do triangulo?")
            let valoresR = aRetangulo(baseR , alturaR)
            alert("A área do retangulo é igual a: " + valoresR)
            break


        case "3": //Área do Quadrado.
            function aQuadrado(lado){
                let calculo = lado*lado
                return calculo
            }
            let lado = prompt("Qual o valor do lado do quadrado?")

            let valoresQ = aQuadrado(lado)
            alert("A área do quadrado é igual a: " + valoresQ)
            break

        case "4": //Área do Trapézio.
            function aTrapezio(baseMaior,baseMenor,alturaTrz){
                let calculo = (parseFloat(baseMenor) + parseFloat(baseMaior)) * alturaTrz /2
                return calculo
            }
            let baseMenor = parseFloat(prompt("Qual o valor da base menor?"))
            let baseMaior = parseFloat(prompt("Qual o valor da base maior?"))
            let alturaTrz = prompt("Qual o tamanho da altura?")

            let valoresTrz = aTrapezio(baseMenor,baseMaior,alturaTrz)
            alert("A área do trapézio é igual a: " + valoresTrz)
            break

        case "5": //Área do Circulo
            function aCirculo(raio){
                let calculo = pi*(raio*raio)
                return calculo
            }
            let raio = prompt("Qual o valor do raio?")
            let valoresC = aCirculo(raio)
            alert("A área do raio é igual a: " + valoresC)
            break
        
        case "6":
            alert("Saindo...")            

        
    }
}while(options != "6")