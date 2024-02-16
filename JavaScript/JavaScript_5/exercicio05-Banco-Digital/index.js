const App = require("./App")

App.createUser("Guilherme Rocha",'guilhermepmrocha@gmail.com')
App.createUser( "Luis Henrique",'luisin@gmail.com',)
App.createUser("Rafael Gomes", 'rafaelgomes@gmail.com')

App.deposit("guilhermepmrocha@gmail.com",'100')

App.transfer("guilhermepmrocha@gmail.com",'rafaelgomes@gmail.com',20 )

App.changeLoanFee(10)
App.loan('luisin@gmail.com', 2000, 12);



// console.log(App.users)

console.table(App.findUserByEmail("guilhermepmrocha@gmail.com"))
console.table(App.findUserByEmail("guilhermepmrocha@gmail.com").account.balance)
console.table(App.findUserByEmail("luisin@gmail.com"))
console.table(App.findUserByEmail("luisin@gmail.com").account)
console.table(App.findUserByEmail("rafaelgomes@gmail.com"))
console.table(App.findUserByEmail("rafaelgomes@gmail.com").account)

