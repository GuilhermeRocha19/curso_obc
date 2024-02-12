const Character = require("./Character");

class Warrior extends Character {
  constructor(name, health, atack, defense, shield) {
    super(name, health, atack, (defense += shield));
    this.shield = shield;
    this.position = "defense";
  }

  switchPosition() {
    if (this.position == "defense") {

      this.position = "atack";
      return (this.defense -= this.shield);

    } if (this.position == "atack") {

      this.position = "defense";
      return (this.defense += this.shield);
    }
  }

  atackTarget(character) {
    if (this.position == "defense") {
      return "Não foi possivel atacar, você está sem posição de defesa";
    } else {
    let damage = this.atack > character.defense ? this.atack - character.defense : 0;
      character.health -= damage;
    }
  }
}

module.exports = Warrior;
