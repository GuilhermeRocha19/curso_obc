const Character = require("./Character");

class Mage extends Character {
    constructor(name, health, atack, defense,magic) {
      super(name, health, atack, defense)
      this.magic = magic;
    }
    atackTarget(character) {
     let damage = (this.atack + this.magic) > character.defense ? (this.atack + this.magic) - character.defense : 0;
      character.health -= damage;
    }
  
    healthTarget(character) {
      character.health += this.magic * 2;
    }
  }
  

  module.exports = Mage;