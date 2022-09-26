console.log('===========> Papelaria tudo tem, seja bem vindo <============')

{
    console.log('R$ 10,90 :Caderno ');
    console.log('R$ 1,99 :Tesoura');
    console.log('R$ 0,50 :Caneta');
    console.log('R$ 0,30 :Lapís');
    console.log('R$ 5.50 :Corretivo');
    console.log('R$ 1,00 :Regua');
    console.log('R$ 3,00 :Cola');
}

console.log("O cliente, escolheu, Caderno, Lapís e Caneta")

let caderno = 10.90
let lapis = 0.50
let caneta = 0.30

let resultado = caderno + lapis + caneta
let final = resultado * 0.10

console.log(" Sua conta ficou no total de R$:", resultado.toFixed(2));