const fs = require("node:fs")

// const streamLeitura = fs.createReadStream("./text.txt")
const streamLeitura = fs.createReadStream("imagens-apoio/apoio1.png")
const buffer = []

streamLeitura.on("data",(chunk)=>{
    buffer.push(chunk)
    console.log("Chunk processado!")
})


streamLeitura.on("end", ()=>{
    console.log("Buffer\n", buffer)
    const dadosCompletos = Buffer.concat(buffer).toString()
    console.log("Dados lidos:\n", dadosCompletos)
})