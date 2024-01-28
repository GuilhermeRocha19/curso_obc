const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('input')
const resultInput = document.getElementById('result')

//Impedir usuário de digitar outras teclas:
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] //teclas permitidas.

document.querySelectorAll('.charKey').forEach(function(charkeyBtn){
    charkeyBtn.addEventListener('click', function(){
        const value = charkeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click',function(){
    input.value = ''
    input.focus() //irá focar no input
})

input.addEventListener('keydown',function(keydown){
    keydown.preventDefault()
    if(allowedKeys.includes(keydown.key)){
        input.value += keydown.key
        return
    } //Se as teclas que estão na array "allowedKeys" estiverem incluidas, irá adicionar no input.
    if(keydown.key === 'Backspace'){
        input.value = input.value.slice(0,-1) //irá "cortar" os numeros inseridos de 1 em um.
    }
    if(keydown === 'Enter'){
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget //Quem acionou o evento, no caso o próprio botão.
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied'
        button.classList.add('success') //Adicionou o botão na classe "success" no CSS
        navigator.clipboard.writeText(resultInput.value)//Copiar valor digitado do resultInput.
    }else{
        button.innerText = 'Copy'
        button.classList.remove('success')//remove a classe "success" do botão.
    }
})

document.getElementById('themeSwitcher').addEventListener('click',function(){
    if(main.dataset.theme === "dark"){
        root.style.setProperty('--bg-color', '#f1f5f9')//irá alterar a variável da cor no CSS
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'ligth'
    }else{
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})