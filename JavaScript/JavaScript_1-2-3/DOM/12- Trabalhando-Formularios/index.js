const form = document.getElementById('orderForm')

form.addEventListener('submit', function(event){
    event.preventDefault()//manter pagina padrão, nesse caso não irá atualizar a pagina ao clickar em submit


    const name = document.querySelector('input[name="name"]').value //receber o input do nome no formulário
    const address = document.querySelector('input[name="address"]').value 
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value//Irá devolver o valor do input marcado dessa forma.
    const observations = document.querySelector('textarea[name="observations"]').value
    
    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salad += " - " + item.value  + "\n"// o "item", que está como parametro na function, são os elementos que foram checados nos inputs de name salad. Os valores desses itens serão adicionados na variável salad.
    })//Irá receber o valor dos inputs marcados


    console.log(name)
    console.log(address)
    console.log(breadType)
    console.log(main)
    console.log(observations)
    console.log(salad)
    console.log({name,salad,breadType,main,salad,observations})
})