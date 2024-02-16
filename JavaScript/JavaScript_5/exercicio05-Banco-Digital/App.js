const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App{
    static #users = []

    static get users(){
        return this.#users
    }

    static findUserByEmail(email){
        const user = this.#users.find(u => u.email === email)
        return user ?? null
    }



    static createUser(name, email){
        if(!App.findUserByEmail(email)){
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

    static transfer(fromUserEmail, toUserEmail,value){
        const fromUser = App.findUserByEmail(fromUserEmail)
        const toUser = App.findUserByEmail(toUserEmail)
        if(fromUser && toUser){
            const newTransfer = new Transfer(fromUser,toUser,value)
            toUser.account.addTransfer(newTransfer)
            fromUser.account.addTransfer(newTransfer)
        }
    }

    static loan(email,value, numberOfInstallments){
        const user = App.findUserByEmail(email)

        if(user){
            const newLoan = new Loan(value,numberOfInstallments)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanFee(newFee){
        Loan.fee = newFee
    }
}