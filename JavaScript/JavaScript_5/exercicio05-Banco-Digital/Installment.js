//Parcelas
module.exports = class Installments{
    contructor(value, number){
        this.value = value
        this.number = number
        this.status = 'Pending'
    }
}