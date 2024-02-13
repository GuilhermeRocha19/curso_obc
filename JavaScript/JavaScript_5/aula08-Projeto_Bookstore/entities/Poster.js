const Product = require("./Product");

module.exports = class Poster extends Product{
    constructor(name, description, heigh, width, price, inStock = 0){
        super(`Poster: ${name}`,description,price, inStock)
        this.heigh = heigh
        this.width = width
    }
}