const form = document.getElementById('oderform')

form.addEventListener('submit',function(ev){
    ev.preventDefault()

    const techArea = document.getElementById('techArea')
    const inputAdd = document.createElement('input')
    const h3 = document.createElement('h3')
    const buttontoConfirm = document.createElement('input')
    
    buttontoConfirm.type = 'button'
    buttontoConfirm.value="Confirmar"
    buttontoConfirm.id = "buttonConfirm"
    buttontoConfirm.onclick = add()
    h3.innerText = 'Tecnologia:'
    inputAdd.type = 'text'
    inputAdd.id = 'techAreaID'
    
    h3.appendChild(inputAdd)
    techArea.append(h3, buttontoConfirm)
    techArea.innerHTML +=    '<label for="main">Tempo de Experiência:</label><br><input type="radio" name="main" id="main1" value="0-2 anos"><label for="main1">0-2 anos</label><input type="radio" name="main" id="main2" value="3-4 anos"><label for="main2">3-4 anos</label><input type="radio" name="main" id="main3" value="5+ anos"><label for="main3">5+ anos</label>'


    function add(){
        console.log("fodase")
    }

    


    
})