const path = require("node:path");


const dir = "src"
const file = "app.js"
const fullPath = path.join(__dirname,dir,file)
console.log(fullPath)

const relativePath = "../arquivos/relatorio.pdf"
// const relativePath = path.join(".",dir,file)
// console.log(relativePath)

const absolutepath = path.resolve(__dirname,relativePath)


const fileName = path.basename(relativePath)

console.log(fileName)

const ext = path.extname(absolutepath)
console.log