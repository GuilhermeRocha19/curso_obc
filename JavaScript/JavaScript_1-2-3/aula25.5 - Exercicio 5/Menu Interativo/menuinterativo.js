let options = "5"
do {
    options = prompt("Quais dessas opções você quer selecionar? \n1)Front-end\n2)Back-end\n3)DataScience\n4)Full-Stack\n5)Encerrar\n")

    /*if(options == "1"){
        alert("Você selecionou Front-End")
    }else if(options == "2"){
        alert("Você selecionou Back-End")
    }else if(options == "3"){
        alert("Você selecionou DataScience")
    }else if(options == "4"){
        alert("Você Selecionou Full-Stack")
    }*/

    switch(options){
        case "1":
            alert("Você selecionou Front-End")
            break
        case "2":
            alert("Você selecionou Back-End")
            break
        case "3":
            alert("Você selecionou DataScience")
            break
        case "4":
            alert("Você Selecionou Full-Stack")
            break
        case "5":
            alert("Você Selecionou Encerrar")
            break
        default:
            alert("Digite uma opção válida.")            
    
    }
    
} while(options !== "5")

alert("O atendimento foi finalizado, agradecemos seu contato.")
