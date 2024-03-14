const deleteFile = require("./deleteFile.js");
const showFile = require("./showFile.js");
const writeFile = require("./writeFile.js");
const updateFile = require("./updateFile.js");

const fileName = "./meuarquivo.txt";

async function start(file) {
  await writeFile(file, "Conteudo inicial do Arquivo \nCriado com módulo fs");
  await showFile(file);
  await updateFile(file, "Conteudo foi Alterado");
  await showFile(file);
  await deleteFile(file);
}


start(fileName)