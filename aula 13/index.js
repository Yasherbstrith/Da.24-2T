//exercicio 1
/*let valor = 0 
for(let i = 0; i < 5; i++) {
valor += i
}
console.log(valor)
// o código está substituindo o valor


//exercicio2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for(let numero of lista){
if(numero > 18){
console.log(numero)
}
}
//1- o código está pegando todos os numeros maiores que o 18*
//2- sim, dependendo acho que só utilizando if seria suficiente  


//exercicio 3
const quantidadeTotal = Number(prompt("digite a quantidade de linhas:"))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
let linha = ""
for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
linha += "*"
}
console.log(linha)
quantidadeAtual++
}
// seria criado 4 linhas 


let seusBichinhos = Number(prompt(" quantos bichinhos de estimação, você tem ?"))

if(seusBichinhos == 0){
    console.log("Que pena! Você pode adotar um pet!");
}else{
    let nomesBichinhos  = []
    for(let i = 0; i < nomesBichinhos + 7; i++){
        let nomesBichinhos = prompt("digite os nomes dos seus bichinhos de estimação:")
        nomesBichinhos.push
    }
    console.log("nome dos seus bichinhos ", nomesBichinhos)
}*/

const arrayOriginal = [97, 86, 95, 35, 98, 56, 20, 87]

for(let numero of arrayOriginal){
    console.log(numero)
    console.log(numero/10)
    }

    let pares = []
for(let numero of arrayOriginal){
    if(numero%2 === 0)
        pares.push(numero)
}
console.log(pares)
   
let arrayStrings = []
for (let i = 0; i < arrayOriginal.length; i++){
    arrayStrings.push("o elemento do index i é :" , arrayOriginal)
}
console.log(arrayStrings)

let maiorNum = arrayOriginal[0] 

for(let num of arrayOriginal){
    if(num > maiorNum){
        maiorNum = num
    }    
}
console.log("o maior numero é:", maiorNum)

let menorNum = arrayOriginal[0]
for(let num1 of arrayOriginal){
    if(num1 < menorNum){
        menorNum = num1 
    }
}
console.log("o menor numero é:", menorNum)