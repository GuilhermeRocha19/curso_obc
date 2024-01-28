const pessoa = {
  nome : 'Guilherme',
  profissao : 'Dev',
  pais : [ 'Marcelo',
  'Adelaide']
};

const name = pessoa.nome;

const {profissao ,nome,pais} = pessoa;

console.log(nome ,profissao, pais);

const [father, mother] = pais;

console.log(father, mother);

function createUser ({nome = 'None',profissao,pais}){
  const id = Math.floor(Math.random() * 9999);

  return{
    id,
    nome,
    profissao, 
    pais, 
  }
}


const Guilherme = createUser(pessoa);
console.log (Guilherme)

