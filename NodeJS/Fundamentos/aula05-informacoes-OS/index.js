const os = require("node:os")

const plataforma = os.platform()
console.log("plataforma do SO:", plataforma)

const arquitetura = os.arch()
console.log("Arquitetura do SO: ", arquitetura)

const processador = os.cpus()
console.log("CPU do computador: ", processador[0])

const memoria = os.totalmem()
console.log("Total de memória do PC:", (memoria/1024/1024/1024).toFixed(2), "gb RAM")


const memoriaLivre = os.freemem()
console.log("Total de memória disponivel no PC:", (memoriaLivre/1024/1024/1024).toFixed(2), "gb RAM")


const tempoLigadoSegundos = os.uptime();

// Converter o tempo de atividade para horas e arredondar
const horasDeAtividade = Math.floor(tempoLigadoSegundos / 3600);

console.log("Computador ligado a", horasDeAtividade, "hrs");