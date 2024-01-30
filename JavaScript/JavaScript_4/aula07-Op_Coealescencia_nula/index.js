// const a = 0 //false
// const b = null //false
// const c = "teste" //true

// console.log(a || b || c)
// console.log(a ?? b ?? c) //verifica se é null ou undefined


let a = 0

let b = a || 42

console.log ({a,b})

b = a ?? 42

console.log ({a,b})

let c = false ?? 42

console.log ({c})


const f = (...args) => console.log(args[0], args[args.length - 1])



console.log(f('ola','teste'))