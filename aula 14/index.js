/*for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0 ){
    console.log(i)
}}

let numero = Number(prompt("Digite um número para ver a tabuada:"))
for (let i = 1; i <= 10; i++) {
console.log(`${numero} x ${i} = ${numero * i}`)
}

let soma = 0
for (let i = 0; i < 5; i++) {
let numero = parseInt(prompt(`Digite o número ${i + 1}:`))
soma += numero
}
console.log(`A soma dos números é: ${soma}`)

let somaNotas = 0
for (let i = 0; i < 5; i++) {
let nota = Number(prompt(`Digite a nota do aluno ${i + 1}:`))
somaNotas += nota
}
let media = somaNotas / 5
console.log(`A média das notas é: ${media}`)

let palavras = ["gato", "rato", "porco", "cavalo", "vaca"]
let palavra = palavras[Math.floor(Math.random() * palavras.length)]
let tentativas = 6
let adivinhadas = [];
for (let i = 0; i < palavra.length; i++) {
adivinhadas[i] = "_"
}
while (tentativas > 0 && adivinhadas.includes("_")) {
let palavraMostrada = "";
for (let i = 0; i < adivinhadas.length; i++) {
palavraMostrada += adivinhadas[i] + " "
}
let letra = prompt(`Palavra: ${palavraMostrada}\nDigite uma letra:`).toLowerCase()
let acertou = false
for (let i = 0; i < palavra.length; i++) {
if (palavra[i] === letra) {
adivinhadas[i] = letra;
acertou = true;
}
}
if (!acertou) {
tentativas--
console.log(`Letra errada! Restam ${tentativas} tentativas.`)
} else {
console.log("Boa! Continue assim.")
}
}
if (!adivinhadas.includes("_")) {
console.log(`Parabéns! Você adivinhou a palavra: ${palavra}`)
} else {
console.log(`Fim de jogo! A palavra era: ${palavra}`)
}

let cpfExistente = "12345678909"
let cpfUsuario = prompt("Digite o CPF (apenas números):")
if (cpfUsuario.length !== 11) {
console.log("CPF inválido. Deve conter 11 dígitos.")
} else {
let soma = 0;
for (let i = 0; i < 9; i++) {
soma += Number(cpfUsuario[i]) * (10 - i)
}
let primeiroDigito = (soma * 10) % 11
if (primeiroDigito === 10) primeiroDigito = 0
if (primeiroDigito === Number(cpfUsuario[9])) {
console.log("CPF válido.")
if (cpfUsuario === cpfExistente) {
console.log("O CPF inserido é igual ao CPF existente.")
} else {
console.log("O CPF inserido é válido, mas diferente do CPF existente.")
}
} else {
console.log("CPF inválido.");
}
}

let valor = Number(prompt("Digite o valor para saque:"))
let notas = [100, 50, 20, 10, 5, 2, 1]
let resultado = []
for (let i = 0; i < notas.length; i++) {
let quantidade = valor / notas[i]
if (quantidade > 0) {
resultado.push(`${quantidade} nota(s) de R$${notas[i]}`)
valor %= notas[i]
}
}
console.log("Para o saque, você receberá:")
for (let i = 0; i < resultado.length; i++) {
console.log(`${resultado[i].quantidade} nota(s) de R$${resultado[i].nota}`)
}

let quantidade = parseInt(prompt("Quantos números você deseja ordenar?"))
let numeros = []
for (let i = 0; i < quantidade; i++) {
let numero = parseInt(prompt(`Digite o número ${i + 1}:`))
numeros.push(numero)
}
for (let i = 0; i < numeros.length; i++) {
for (let j = 0; j < numeros.length - 1 - i; j++) {
if (numeros[j] > numeros[j + 1]) {
let temp = numeros[j]
numeros[j] = numeros[j + 1]
numeros[j + 1] = temp
}
}
}
console.log("Números ordenados:")
for (let i = 0; i < numeros.length; i++) {
console.log(numeros[i])
}*/