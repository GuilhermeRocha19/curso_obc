class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity){
    this.inStock += quantity
  }
  calculateDiscount(discount){
    const valuediscount = this.price * (discount / 100);
    this.price -= valuediscount
  }
}

const monitor_lg = new Product('Monitor LG',"Monitor 144hz, 1ms",'1200');

monitor_lg.calculateDiscount(10)
monitor_lg.addToStock(15)

console.log(monitor_lg)
