function addInput(){
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')//Criando um li no HTML, usando createelement
    newLi.className = 'list-item'
    newLi.innerText = 'Novo Input: '//Texto que aparecerá no texto do LI

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    newLi.appendChild(newInput)//Adicionando o input para dentro do li

    ul.appendChild(newLi)//Adicionando o LI para dentro do UL
}