const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])


const townsCopy = towns

townsCopy.pop() // Remove ultimo item do array
townsCopy.pop() // Remove ultimo item do array
townsCopy.push('Juno')

console.log({towns, townsCopy})

const  townsClone = [...towns] //formato certo de clonar um array

townsClone.push('Aldeir')

console.log({towns, townsCopy ,townsClone})


const townsObjt = {
  ...towns
}
const townsObjtClone = {...townsObjt}

townsObjtClone.teste = 'teste'


console.log({townsObjtClone,townsObjt})