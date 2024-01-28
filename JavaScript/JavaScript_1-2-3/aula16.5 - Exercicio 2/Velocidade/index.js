let v1 = prompt("Digite a velocidade do primeiro veiculo")
let v2 = prompt("Digite a velocidade do segundo veiculo")

if(v1 > v2){
    alert(`O primeiro veiculo é mais veloz, estando à ${v1}km enquanto o segundo veiculo está à ${v2}km. `)
}else if (v2 > v1){
    alert(`O segundo veiculo é mais veloz, estando à ${v2}km enquanto o primeiro veiculo está à ${v1}km. `)
}else{
    alert("As velocidades dos dois veiculos são iguais." , v1,"km")
} 