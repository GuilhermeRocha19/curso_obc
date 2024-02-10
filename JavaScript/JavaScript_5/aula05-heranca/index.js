class Property{
    constructor(area,price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}

class House extends Property{

}

const land = new Property(250, 50000);
const house = new House(100,23000)

console.log(land)
console.log(house instanceof Property)

class Apartment extends Property{
    constructor(number,area,price){
        // this.area = area
        super(area,price)
        this.number = number
    }

    getFloor(){
        return this.number.slice(0, -2)
    }
}



const apt = new Apartment("404",50,150000)

console.log(apt.getFloor())