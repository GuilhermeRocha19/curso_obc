class Character {
  constructor(name, health, atack, defense) {
    this.name = name;
    this.health = health;
    this.atack = atack;
    this.defense = defense;
  }

  atackTarget(character) {
   let damage =  this.atack > character.defense ? this.atack - character.defense : 0;
    character.health - damage;
  }
}

module.exports = Character
