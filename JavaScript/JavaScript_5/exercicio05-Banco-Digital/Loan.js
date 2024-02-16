const Installments = require("./Installment")

//emprestimo
module.exports = class Loan{
    static #fee = 1.05
    constructor(valueLoan, installments){
        this.valueLoan = valueLoan
        this.installments = []
        for (let i = 1; i <= installments; i++) {
          this.installments.push(new Installments((valueLoan * Loan.#fee) / installments, i))
        }

        this.date = new Date()
    }



    static get fee(){
        return Loan.#fee;
    }

    static set fee(newFee){
        Loan.#fee = 1 + (newFee / 100);
    }
}
