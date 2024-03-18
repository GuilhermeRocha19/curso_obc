// process.stdout.write("Olá,mundo!")

// process.stdin.on("data",(data)=>{
//     process.stdout.write(`Você digitou ${data}`)
// })

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.on("line", (input)=>{
//     rl.write(`Você digitou ${input}\n`)
// })

// rl.question("Qual é o seu nome?", (answer) => {
//   rl.write(`Olá, ${answer}! \n`);
//   rl.close();
// });


// rl.once("close", ()=>{
//   rl.write("Saindo...")
//   // process.exit(0);
// })

rl.on("SIGINT", ()=>{
  rl.question("Deseja realmente sair?", (answer)=>{
    if(answer.trim().toLocaleLowerCase() === "s"){
      process.exit(0)
    }else{
      rl.write("Você escolheu continuar")
    }
  })
})