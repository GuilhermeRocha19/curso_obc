//pendente  - pending
//resolvida - resolved
//rejeitada - rejected
//finalizada
// const p = new Promise((resolve, reject)=>{
//     console.log('A promisse está sendo executada.')
//     setTimeout(()=>{
//         if(true){
//             reject(true)
//         }
//         console.log('Resolvendo a Promise')
//         resolve(true);
//     }, 2000)
// })

// console.log(p)

const p = execute()

console.log(p)


function execute(){

    return new Promise((resolve, reject)=>{
        console.log('Promisse sendo executada')
        setTimeout(()=>{
            console.log('Resolvendo a Promise')
            resolve('Resultado')
        },2000)
    })  
}
