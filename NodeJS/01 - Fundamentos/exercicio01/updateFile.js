const fs = require("node:fs");
function updateFile(fileName, text) {
  const exists = fs.existsSync(fileName);

  if (exists) {
    const content = text;

    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, content, "utf-8", (err) => {
        if (err) {
          reject(`Erro: ${err.message}`);
          
        }

        resolve("Sucesso ao sobreescrever!");
      });
    });
  } else {
    console.log("Arquivo não existe");
  }
}

module.exports = updateFile;
