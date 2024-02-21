async function asyncSum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return Promise.reject("Erro");
    } 
      return a + b;
    
  }

//   async function execute(){
//     asyncSum(50,33).then(result =>{
//         console.log(result)
//     })
//   }


async function execute(){
    try{
        const result = await asyncSum('a',33)
        console.log(result) 
    }catch(err){
        console.log(err) 
    }
    
}

  execute()