const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};

console.log(`Média Aritmética comum: ${average(10, 10)}`);

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { num, weight }) => accum + (num * (weight ?? 1)), 0)

  const weightSum = entries.reduce((accum, entry) => accum + (entry.weight),0)

  return (sum / weightSum).toFixed(2);
};



console.log(`Média Ponderada: ${weightedAverage(
    { num: 9, weight: 3 },
    { num: 7 },
    { num: 10, weight: 1 },
  )}`)


