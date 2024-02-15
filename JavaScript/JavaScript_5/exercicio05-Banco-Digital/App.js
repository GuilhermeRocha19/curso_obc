const Deposit = require("./Deposit")
const User = require("./User")

module.exports = class App{
    static #users = []

    static findUserByEmail(email){
        const user = this.#users.find(u => u.email === email)
        return user ?? null
    }

    static createUser(name, email){
        if(!findUserByEmail(email)){
            const user = new User(name, email);
            this.#users.push(user)
        }
    }

    static searchUserByEmail(email){
        const positionUser = this.#users.findIndex(u => u.email === email);
        return this.#users[positionUser]
    }

    static deposit(email, value){
        const user = App.findUserByEmail(email)
        if(user){
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(email, value){
        const user = App.findUserByEmail(email)
        if(user){
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }
}