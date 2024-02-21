function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolvido");
    }, seconds * 1000);
  });
}

const numbers = [42, 3, 2, 87, 44];

// console.log(squares);

// Promise.all(squares).then(result =>{
//     console.log(result)
// })

async function execute() {
  const squares = await Promise.all(
    numbers.map(async (number) => {
      await waitFor(2);
      return number ** 2;
    })
  )
  console.log(squares)
}

execute()
