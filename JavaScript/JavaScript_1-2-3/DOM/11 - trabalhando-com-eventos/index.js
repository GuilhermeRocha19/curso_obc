function register(ev){
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const paswordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === paswordConfirmation){
        alert("registrado")
    }else{
        alert("Senhas não correspondem")
    }
    
}

const button = document.getElementById('register-button')

button.addEventListener('click',register)
