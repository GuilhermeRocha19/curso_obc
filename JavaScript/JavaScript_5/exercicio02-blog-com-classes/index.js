const Person = require("./Person");

const guilherme = new Person("Guilherme Machado");
const rafael = new Person("Rafael Gomes");

const berserk = guilherme.newPost('Berserk','Berserk é um mangá criado por Kentaro Miura')

berserk.addComment(rafael.name,"Esse mangá é muito bom")

console.log(guilherme.posts);
 