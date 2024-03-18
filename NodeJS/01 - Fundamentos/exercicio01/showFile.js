const fs = require("node:fs");

function readFile(fileName) {

  return new Promise( (resolve,reject)=>{
    fs.readFile(fileName, "utf8",(err, data) => {
      if (err) {
        reject(`Erro: ${err}`);
      } else {
        console.log(data);
        resolve();
      }
    });
  } )
  
}

module.exports = readFile;