function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = "Contato"

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome:"

    const nameInput = document.createElement('input')//Criando um input
    nameInput.type = 'text' //Definindo o tipo de input
    nameInput.name = "fullName"//Adicionando um nome para o input

    nameLi.appendChild(nameInput)//O "pai" li, Puxando o seu filho "input" junto dele
    ul.appendChild(nameLi)//O "pai" ul, Puxando o seu filho "li" junto dele
    ul.appendChild(document.createElement('br'))


    
    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone:"
    const phoneInput = document.createElement('input')//Criando um input
    phoneInput.type = 'text' //Definindo o tipo de input
    phoneInput.name = "phoneNumber"//Adicionando um nome para o input
    phoneLi.appendChild(phoneInput)//O "pai" li, Puxando o seu filho "input" junto dele
    ul.appendChild(phoneLi)//O "pai" ul, Puxando o seu filho "li" junto dele
    ul.appendChild(document.createElement('br'))


    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'adressUs'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3,ul) // Adicioona varios elementos ao mesmo tempo
    
}


function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const tittles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')
    
    contactSection.removeChild(tittles[tittles.length -1]) //irá remover o ultimo titulo
    contactSection.removeChild(contacts[contacts.length -1]) //irá remover o ultimo contato ul
    
}