function imc(weight, height) {
  if (isNaN(weight) || isNaN(height)) {
    return Promise.reject("Erro! Parâmetros não são números.");
  }
  return weight / (height ** 2);
}

async function resultIMC(weight, height) {
  try {
    const result = await imc(weight, height);
    console.log(`O Resultado foi ${result.toFixed(2)}`);
    if (result < 18.5) console.log("Situação: MAGREZA");
    else if (result < 25) console.log("Situação: NORMAL");
    else if (result < 30) console.log("Situação: SOBREPESO");
    else if (result < 40) console.log("Situação: OBESIDADE");
    else console.log("Situação: OBESIDADE GRAVE");
  } catch (error) {
    console.log(error);
  }
}

resultIMC(77.5, 1.73);
// resultIMC(73, 1.71);
// resultIMC(73, 1.71);
// resultIMC(73, 1.71);
// resultIMC("asd", 1.71);
// resultIMC(73, 1.71);
