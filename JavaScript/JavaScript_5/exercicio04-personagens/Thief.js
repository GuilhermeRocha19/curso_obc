const Character = require("./Character");

class Thief extends Character {
  atackTarget(character) {
    let damage = ( this.atack > character.defense) ? this.atack - character.defense : 0;
    character.health -= (damage*2);
  }
}

module.exports = Thief;
