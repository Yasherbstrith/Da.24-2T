//exercicio 1
/*const respostaDoUsuario = prompt("digite o numero que voce quer testar")
const numero = number(respostaDoUsuario)
//esta testando o numero para ver se o numero é impar ou par
if (numero % 2 ===0){
console.log("passou no teste.")// para numeros pares
} else{
console.log("nao passou no teste.")// para numeros impar
}*/

//exercicio 2
/*let fruta = prompt("escolha uma fruta")
let preco
// esse codigo serve para consultar frutas e preços
switch (fruta) {
case "laranja":
preco = 3.5
break;
case "maçã":// o preço impresso é de R$ 2.25
preco = 2.25
break;
case "uva":
preco = 0.30
break;
case "pêra":// se retirassemos o break, o preço seria de R$ 5
preco = 5.5 
break; // BREAK PARA O ITEM c.
default: 
preco = 5 
break;
}
console.log("o preço da fruta", fruta, "é", "R$", preco)*/

//exercicio 3
/*const numero = Number(prompt("digite o primeiro numero"))
//esta criando uma variavel, perguntando para o usuario e imprimindo no console
if(numero > 0){
console.log("esse numero passou no teste")// se o numero escolhido foi numeros positivos aparece automaticamente essa mensagem
let mensagem = "essa mensagem é secreta !!!"
}
console.log(mensagem)// nao foi imprimida, pois nao tem uma mensagem definida*/

//exercicio 4
/*let idade = prompt("Qual a sua idade?")
if(idade > 18){
    console.log("você pode dirigir!")
}else{
    console.log("você não pode dirigir!")
}
*/

//exercicio 5
/*const turno = prompt("digite seu turno, entre: M (matutino), V (Vespertino) ou N (Noturno).")
if(turno === "M"){
    console.log("bom dia!")
}else if(turno === "V"){
    console.log("boa tarde!")
}else if(turno === "N"){
    console.log("boa noite!")
}*/

/*exercicio 6
const turno = prompt("digite seu turno, entre: M (matutino), V (Vespertino) ou N (Noturno).")
switch(turno){
    case "M":
    console.log("bom dia!")
    break;
    case "V":
        console.log("boa tarde!")
        break;
        case "N":
        console.log("boa noite!")
        default :
    console.log("turno inválido inserido")
    break
}*/

//exercicio 7
/*7. Considere a situação: você vai ao cinema com um amigo ou amiga, porém
ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o
ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o
gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo,
imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha
outro filme :("*/

const genero = prompt("qual o genero do filme que vão assistir?")
const preco = Number (prompt("qual é o preço do ingresso?"))
 
if(genero === "fantasia" && preco < 15){
    console.log("bom filme!")
}else{
    console.log("escolha outro filme:(.")
}