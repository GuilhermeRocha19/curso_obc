function execute() {
  return new Promise((resolve, reject) => { 
    console.log("Promisse sendo executada");
    setTimeout(() => {

      if (true) {
        reject("A Promise foi rejeitada");
      } else {
        console.log("Resolvendo a Promise");
        resolve(42);
      }
    }, 2000);
  });
}

execute().then((result) => {
    console.log(`O Resultado da Promise foi ${result}`);
  }).catch((reason)=>{
      console.log(`A Promise foi Rejeitada! Motivo: ${reason}`)
  }).finally(()=>{
    console.log('Promise foi finalizada!')
  })




