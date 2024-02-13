const Mage = require("./Mage")
const Thief = require("./Thief")
const Warrior = require("./Warrior")

const guilhermeMatador = new Thief('Guilherme',100,10,5)
const rafaelMaguinho =   new Mage("Rafael",100,8,3,10)
const luisinLutador = new Warrior("Lui-sin",120,30,9,10)

guilhermeMatador.atackTarget(luisinLutador)

console.table({guilhermeMatador,rafaelMaguinho,luisinLutador});

guilhermeMatador.atackTarget(rafaelMaguinho);

console.table({guilhermeMatador,rafaelMaguinho,luisinLutador});


