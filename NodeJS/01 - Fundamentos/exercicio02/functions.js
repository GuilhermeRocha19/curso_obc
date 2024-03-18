const os = require("node:os");
const path = require("node:path");
const fs = require("node:fs")
const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60

const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
const uptimeHoursInSeconds = uptimeHours * 60 * 60

const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
const uptimeMinsInSeconds = uptimeMins * 60

const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)

const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`
const infoSistem = {
  nameOS:os.platform(),
  arch : os.arch(),
  modelCPU : os.cpus()[0].model,
  timeSistemIsOn : uptime,
  memInUse : 100 - ((os.freemem() / os.totalmem()) * 100).toFixed(0) + "%"
}

function createFile() {
  const exists = fs.existsSync("./log.txt");
  if (!exists) {
    const content = "LOG DO SISTEMA";
    return new Promise((resolve, reject) => {
      fs.writeFile("./log.txt", content, "utf-8", (err) => {
        if (err) {
          reject(`Erro: ${err.message}`);
        } else {
          resolve("Sucesso ao Criar!");
        }
      });
    });
  }
}

function showInfoSistem(){
  setInterval(()=>{
    console.clear()
    console.table(infoSistem)
  },1000)
}

function writeInfoSistemOnFile(){
  const exist = fs.existsSync('./log.txt')
  if(exist){
    let content = fs.readFileSync("./log.txt","utf-8") 
    setInterval(()=>{
      content += `Dados do Sistema: \n ${infoSistem}\n------------------------------------------\n`;
      fs.writeFileSync("./log.txt",content)
    },1000)
    
  }
}

showInfoSistem()
createFile()
writeInfoSistemOnFile()
