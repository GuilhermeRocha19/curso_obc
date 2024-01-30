const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};

console.log(`Média Aritmética comum: ${average(10, 10)}`);

const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { num, weight }) => accum + num * (weight ?? 1),
    0
  );

  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );

  return (sum / weightSum).toFixed(2);
};

console.log(
  `Média Ponderada: ${weightedAverage(
    { num: 9, weight: 3 },
    { num: 7 },
    { num: 10, weight: 1 }
  )}`
);


const median = (...numbers) => {
  //ordernar array
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);

  if (orderedNumbers.length % 2 != 0) {

    return orderedNumbers[middle];

  } else {
    
    middle2 = Math.floor(orderedNumbers.length / 2) - 1;

    media = (orderedNumbers[middle2] + orderedNumbers[middle]) / 2;

    return media;
  }
};

console.log(`Média central: ${median(10, 5, 6, 8, 1,3)}`);





const mode = (...numbers) =>{
  //verifica qual elemento mais aparece no parametro
  const quantidades = numbers.map(num => [
    num,
    numbers.filter(n => num == n).length 
    //filtrar elementos de array
  ])

  quantidades.sort((a,b) => b[1] - a[1])



  return quantidades[0][0];
}

console.log(`Moda: ${mode(10,10,10,2,2,2,2,1)}`);