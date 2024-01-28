let valor = Number(prompt("Digite o valor em Metros:"))

const unidadeMedida = prompt("Digite a unidade de medida que deseja: (mm, cm, dm, dam, hm, km)")



switch(unidadeMedida){
    case "mm":
        alert(`O valor de ${valor}M é equivalente a ${valor*1000}mm`)
        break
    case "cm":
        alert(`O valor de ${valor}M é equivalente a ${valor*100}cm`)
        break
    case "dm":
        alert(`O valor de ${valor}M é equivalente a ${valor*10}dm`)
    case "dam":
        alert(`O valor de ${valor}M é equivalente a ${valor/10}dam`)
        break 
    case "hm":
        alert(`O valor de ${valor}M é equivalente a ${valor/100}hm`)
        break
    case "km":
        alert(`O valor de ${valor}M é equivalente a ${valor/1000}km`)
        break 
    default:
        alert("Opção inválida...") 
        break                         
}