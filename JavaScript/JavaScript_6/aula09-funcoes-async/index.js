async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Erro");
  } else {
    return a + b;
  }
}

async function asyncSubtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Erro");
  } else {
    return a - b;
  }
}

const sumResult = asyncSum(2, 33);
const subResult = asyncSubtract(50, 33);

Promise.all([sumResult, subResult])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

// const numbers = [4, 9, 5, 13, 77];

// async function asyncSquare(x) {
//   return (x ** 2)
// }

// Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
//   console.log(squares);
// }).catch(err =>{
//     console.log(err)
// })
