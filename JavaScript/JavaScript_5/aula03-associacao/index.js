const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Ventos do norte", 32,"Jardim dos Lagos","Porto Alegre","RS")
const gui = new Person("Guilherme Rocha", addr);

console.log(gui)
console.log(gui.address.fullAddress())