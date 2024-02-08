
//PascalCase
function Book(tittle, pages, tags, author) {
  this.tittle = tittle;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };
  this.save = function () {
    //salvar no banco de dados
  };
}

const author = { name: "Christopher Paolini" };
const tags = ["Fantasia", "Aventura", "Medieval"];

const eragon = new Book("Eragon", 462, tags, author);

const hunger_games = new Book("Hunger Games", 210, tags, author);

hunger_games.store = "Saraiva";
console.log(eragon);
console.log(hunger_games);
