function sum(parametro,...numbers) {
  
  return numbers.reduce((acumulador , valorAtual) => acumulador + valorAtual,parametro)
}


console.log(sum(5,2,3))