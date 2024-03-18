const fs = require("node:fs");

function deleteFile(filename) {
  return new Promise((resolve, reject) => {
    fs.unlink(filename, (err) => {
        if(err){
            reject(err)
        }else{
            resolve("Arquivo Excluido")
        }
    });
  });
}

module.exports = deleteFile;
