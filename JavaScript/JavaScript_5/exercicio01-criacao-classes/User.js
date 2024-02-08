class User{
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password){
        if(this.email === email && this.password === password){
            console.log("Login bem sucedido!")
        }else{
            console.log("email ou senha incorretos")
        }
    }
}

const guilherme = new User('Guilherme Machado','guilherocha@gmail.com','1234')

guilherme.login('guilhermepmrocha@gmail.com','1234')

console.log(guilherme)