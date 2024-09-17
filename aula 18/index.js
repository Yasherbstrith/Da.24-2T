//atividade 1
/*const filme = {
    nome: "auto da compadecida", 
    ano: 2000,
    elenco: [
    "Matheus Nachtergaele", "Selton Mello", "Denise fraga", "Virginia Cavendish"
    ],
    transmissoesHoje: [
    {canal:"telecine", horario:"21h"},
    {canal: "canal brasil", horario: "19h"},
    {canal: "globo", horario:"14h"} 
    ]
    }
    console.log(filme.elenco[0])// Matheus Nachtergaele
    console.log(filme.elenco[filme.elenco.length-1])//Virginia Cavendish
    console.log(filme.transmissoesHoje[2])// globo, 14h*/
    
    
    //atividade 2
   /* const cachorro = {
    nome: "Juca", 
    idade: 3,
    raca: "SRD"
    }
    const gato = {...cachorro, nome: "Juba"}
    
    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")} 
    
    console.log(cachorro)// Juca, 3, SRD
    console.log(gato)// Juba, 3, SRD
    console.log(tartaruga)// Jubo, 3, SRD
    // copia as propriedades */
    
    //atividade 3
    /*function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
    }
    
    const pessoa = {
    nome: "caio",
    idade: 23,
    backender: false
    }
    
    console.log(minhaFuncao(pessoa,"backender"))// false
    console.log(minhaFuncao(pessoa, "altura")) // porque não existe um objeto com o nome altura*/
    
    
    //atividade 4
    //exemplo de entrada
    /*const pessoa = {
    nome: "Lucas Gabriel"
    apelidos: ["mestre","prof","lu"]
    }
    //exemplo de saida*/
    
    //atividade 5
   /*const pessoa = {
        nome: "Yasmin",
        apelidos: ["Min","Dim","Yas"]
        }
       console.log("eu sou", pessoa.nome, "mas pode me chamar de:", pessoa.apelidos)
       const apelidos1 = {...pessoa, apelidos: "Yah"}

       const apelidos2 = {...apelidos1, apelidos: "Herbs"}

       const apelidos3 = {...apelidos2, apelidos: "Didim"}
       
      
       console.log(apelidos1)
       console.log(apelidos2)
       console.log(apelidos3)*/


// atividade 6
/*const primeiraPessoa = {
    nome: 'Luana',
    idade: 32,
    profissao: 'Professora'
}
console.log(primeiraPessoa)

const segundaPessoa = {
    nome: "Amanda",
    idade: 54,
    profissao: "Médica"
}
console.log(segundaPessoa)

function pessoaMais(objeto){
    return[
      objeto.nome,
      objeto.nome.length,
      objeto.idade,
      objeto.profissao,
      objeto.profissao.length
    ]
}
console.log(pessoaMais(primeiraPessoa))
console.log(pessoaMais(segundaPessoa))*/

/*const carrinho = [] 

const fruta1 = {
    nome: "Maça",
    diponibilidade: true
}
const fruta2 = {
    nome: "Kiwi",
    disponibilidade: "false"
}
const fruta3 = {
    nome: "uva",
    disponibilidade: "true"
}
console.log(fruta1)
console.log(fruta2)
console.log(fruta3)

function addFrutas(fruta){
    carrinho.push(fruta)
}
addFrutas(fruta1)
addFrutas(fruta2)
addFrutas(fruta3)

console.log(carrinho)*/
