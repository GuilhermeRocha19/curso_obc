class Acount {
  #password;
  #balance = 5;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }
  getBalance(email, password) {
    if (this.#authenticate(email,password)) {
      return this.#balance;
    }
  }
 
  #authenticate(email,password){
    return this.email === email && this.#password === password
  }
}

const user = {
  email: "guilherme@gmail.com",
  password: "1234",
};

const myAccount = new Acount(user);


console.log(myAccount.getBalance('guilherme@gmail.com','1234'));



