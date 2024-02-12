class Vehicle{
    move(){
        console.log("Veiculo está se movendo")
    }
}

class Car extends Vehicle{
    move(){
        console.log("Carro está se movendo")
    }
}

class Ship extends Vehicle{
    move(){
        console.log("Navio está navegando")
    }
}


class Airplane extends Vehicle{
    move(speed){
        console.log("Avião está voando a "+speed+"km")
    }
}

const citroenC3 = new Car();
const blackPearl = new Ship();
const aviaoGol = new Airplane();

// citroenC3.move()
// blackPearl.move()
// aviaoGol.move(1300)

function start(vehicle){
console.log("iniciando um veiculo...")
vehicle.move()
}


start(citroenC3)
start(blackPearl)
start(aviaoGol)