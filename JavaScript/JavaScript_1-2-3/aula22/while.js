let velocidade = 80

while(velocidade > 0){
    alert(`O Carro está a ${velocidade} km/h `)
    velocidade = velocidade - 20
    alert("Diminuindo 20km/h")
    if(velocidade == 0){
        alert("O Carro está parado.")
    }
}