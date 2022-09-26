console.log("==========> Banco Rouba Dinheiro <==========");

{
    console.log("Olá Cliente bobão, você tem R$850,00 na sua conta, deseja fazer um saque?")
    console.log("Você escolheu sim, que ótimo, ficaremos com uma pequena taxa do valor sacado")
}

let sal = 850
let taxa = sal * 0.10
let final  = sal - taxa

console.log("O saque foi efetuado com sucesso, a taxa foi de R$:", taxa.toFixed(2));
console.log("O valor sacado ficou em R$:",final.toFixed(2));