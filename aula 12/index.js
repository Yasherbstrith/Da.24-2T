/*let i = 0

while(i<=10){
    console.log("o numero é:", i)
    i++;
}

let estomago = 0

while(estomago < 100){
    console.log("quero comer mais coxinha", estomago)
    estomago = estomago + 10
}

let num = 10
let soma = 0

while(num !== 0){
  num = Number(prompt("digite um numero:"))
   console.log(num)
 soma += num
 console.log("o numero digitado foi:", num)
}
 console.log("o valor total foi:", soma)

 
let c = 1

do{
    console.log("o valordo contador é: ", c)
    c++
}while(c <= 6)

let numeros =[14, 67, 89, 15, 23]
for(let i = 0; i<5;i++){
    const elemento = numeros[i]
    console.log(elemento)
}
    
let numeros = [11, 15, 18, 14, 12, 13]
let numeroMaior = numeros[0]
for(let i = 0; i<6;i++){
    if(numeroMaior<numeros[i]){
        numeroMaior = numeros [i]
    }  
}
console.log("o maior numero é:", numeros)

let numeros = [11, 15, 18, 14, 12, 13]
let soma = numeros[0 ]
for(let i = 0; i<6;i++){
    if(numeros[i]%2 === 0){
        soma += numeros [i]
    }  
}
console.log("a soma dos numeros é:" numeros)

const numeros = [14, 67, 89, 15, 23]

for(let numero of numeros){
    console.log(numero)//independentemente do nome da variavel, vai dar o msm resultado
}

const frase = ["Oi", "sumido", "tudo", "bem?", "Saudade"]
const frase1 = ""

for(let espaco of frase){
    frase1 += espaco+" "
}
console.log(frase1)*/

let numeros = [11, 15, 18, 14, 12, 13]
let soma = 0

for(let numero of numeros){
    if(numero%2 === 0)
    soma += numero
}
console.log("a soma dos numeros pares é:", soma)