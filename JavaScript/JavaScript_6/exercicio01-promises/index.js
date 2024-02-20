function imc(weight, height) {
  const imc = new Promise((resolve, reject) => {
    if (isNaN(weight) || isNaN(height)) {
      reject("Erro! Parametros não são numeros.");
    } else {
      const result = weight / (height * 2);
      resolve(result);
    }
  });

  return imc;
}
function resultIMC(weight, height) {
  imc(weight, height)
    .then((result) => {
      console.log(`O Resultado foi ${result.toFixed(2)}`);
      if (result < 18.5) console.log("Situação: MAGREZA");
      else if (result < 25) console.log("Situação: NORMAL");
      else if (result < 30) console.log("Situação: SOBREPESO");
      else if (result < 40) console.log("Situação: OBESIDADE");
      else console.log("Situação: OBESIDADE GRAVE");
    })
    .catch((reject) => {
      console.log(`Erro: ${reject}`);
    })
    .finally(() => {
      console.log(`Promise Finalizada`);
    });
}

resultIMC(78, 1.73);
resultIMC(73, 1.71);
resultIMC(73, 1.71);
resultIMC(73, 1.71);
resultIMC('asd', 1.71);
resultIMC(73, 1.71);
