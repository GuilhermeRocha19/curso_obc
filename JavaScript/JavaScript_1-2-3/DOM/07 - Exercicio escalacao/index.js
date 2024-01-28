function addPlayer(){
    const section = document.getElementById("playerSection")

    const h2 = document.createElement('h2')
    h2.innerText = 'Jogador'
     
    const ul = document.createElement('ul')//Criando a UL

    const buttonConfirm = document.createElement('button')
    buttonConfirm.innerHTML = '<h3 onclick="teste()">Escalar</h3>'
    
    const positionLi = document.createElement('li')
    positionLi.innerText = "Posição: "
    const positionInput = document.createElement('input')
    positionInput.type = 'text'
    positionInput.id = 'positionId'
    positionLi.appendChild(positionInput)
    ul.appendChild(positionLi)


    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'nameId'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)

    const numberLi = document.createElement('li')
    numberLi.innerText = "Numero da camisa: "
    const numberInput = document.createElement('input')
    numberInput.type = 'number'
    numberInput.id = 'numberId'
    numberLi.appendChild(numberInput)
    ul.appendChild(numberLi)

    section.append(h2,ul,buttonConfirm)


}

function teste(){
    const confirm = window.confirm("Confirmar escalação?")
    
    if(confirm){
        const sectionConfirm = document.getElementById('confirmSection')
        const h3 = document.createElement('h3')
        h3.innerText = 'Jogador: '

        const ul = document.createElement('ul')


        const namePlayer = document.getElementById('nameId').value
        const positionPlayer = document.getElementById('positionId').value
        const numberPlayer = document.getElementById('numberId').value

        const positionLi = document.createElement('li')
        positionLi.innerText = `Posição: ${positionPlayer}`
        ul.appendChild(positionLi)

        const nameLi = document.createElement('li')
        nameLi.innerText = `Nome: ${namePlayer}`
        ul.appendChild(nameLi)

        const numberLi = document.createElement('li')
        numberLi.innerText = `Nome: ${numberPlayer}`
        ul.appendChild(numberLi)

        sectionConfirm.append(h3,ul)

        document.getElementById('positionId').value = ''
        document.getElementById('nameId').value = ''
        document.getElementById('numberId').value = ''

    }
    
}

function removePlayer(){
    const sectionConfirm = document.getElementById('confirmSection')

    const tittle = document.getElementsByTagName('h3')
    const player = document.getElementsByTagName('ul')

    sectionConfirm.removeChild(tittle[tittle.length -1])
    sectionConfirm.removeChild(player[player.length -1])
}