export default function(ev){
    const resultInput = document.getElementById('result')
    const button = ev.currentTarget //Quem acionou o evento, no caso o próprio botão.
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied'
        button.classList.add('success') //Adicionou o botão na classe "success" no CSS
        navigator.clipboard.writeText(resultInput.value)//Copiar valor digitado do resultInput.
    }else{
        button.innerText = 'Copy'
        button.classList.remove('success')//remove a classe "success" do botão.
    }
}