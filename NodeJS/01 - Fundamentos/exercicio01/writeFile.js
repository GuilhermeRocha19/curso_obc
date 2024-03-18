const fs = require("node:fs");

function writeFile(fileName, text) {
  const exists = fs.existsSync(fileName);
  if (!exists) {
    const content = text;
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, content, "utf-8", (err) => {
        if (err) {
          reject(`Erro: ${err.message}`);
        } else {
          resolve("Sucesso ao escrever!");
        }
      });
    });
  }
}

module.exports = writeFile;
