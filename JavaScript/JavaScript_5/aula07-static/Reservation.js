class Reservation {
  constructor(guest, room, days) {
    this.guest = guest
    this.room = room
    this.days = days
    this.total = days * Reservation.baseFee
  }

  static baseFee = 150

  static showBaseFee(){
    console.log(`Taxa base é R$${Reservation.baseFee}`)
  }

  static get premiumFee(){
    return Reservation.baseFee * 1.5;
  }


}

Reservation.showBaseFee()


const r1 = new Reservation(2, "301", 4);
console.log(r1)

Reservation.baseFee = 200

const r2 = new Reservation(4, "206", 8);
console.log(r2)


console.log(`Premium fee is ${Reservation.premiumFee}`)