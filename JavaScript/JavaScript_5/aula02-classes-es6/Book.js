class Book{
    constructor(tittle){
        this.tittle = tittle
        this.publised = false
    }
    publish(){
        this.publised = true
    }
};

const eragon = new Book("eragon");
const elden = new Book("Elden");


eragon.publish()

console.log(eragon)
console.log(elden)

console.log(eragon instanceof Book)