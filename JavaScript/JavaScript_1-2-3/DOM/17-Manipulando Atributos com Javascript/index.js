const input = document.getElementById('input')

document.getElementById('value').addEventListener('click',function(){
    input.value ="Hello world!" 
    
    console.log(input.value)//irá aparecer o value "hello world" que foi adicionado via javascript.
    console.log(input.getAttribute('value')) // irá aparecer o "value" do input que está predefinido no HTML
})

document.getElementById('type').addEventListener('click',function(){
    //input.type = input.type !== 'radio' ? 'radio' : 'text' //irá alterar o tipo do input com base no que ele é atualmente.

    input.setAttribute('type','radio') // outra forma de alterar o tipo do input
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = "Digite algo..."
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)//irá desabilitar o input.
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.somethingElse
    console.log('O valor do atributo data-something-Else é: ' , data)
    input.dataset.somethingElse = "outro valor"
    console.log('O valor do atributo data-something agora é: ' , input.dataset.somethingElse)
})

