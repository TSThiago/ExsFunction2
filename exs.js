// Ex 1:

// let nome = ["A","B","C"]
// let orcamento = [100,200,300]
// let contador = 0
// let continuar = true
// let nomeProjeto = 0
// let valorProjeto = 0
// let opcao = 0

// console.log(nome)
// console.log(orcamento)
// GerirProjeto(nomeProjeto,valorProjeto,opcao)
// console.log(nome)
// console.log(orcamento)

// function CriarProjeto(NomeParametro, OrcamentoParametro) {
//     while (continuar == true) {
//         NomeParametro[contador] = prompt("Insira o nome do projeto")
//         OrcamentoParametro[contador] = parseFloat(prompt("Insira o valor do orçamento"))
//         let parar = prompt("O que deseja fazer? \n1 - Criar outro projeto \n2 - Não criar mais um projeto")
//         while (parar < 1 || parar > 2) {
//             parar = prompt("Insira uma opção válida: \n1 - Criar outro projeto \n2 - Não criar mais um projeto")
//         }
//         if (parar == 1) {
//             continuar == true
//             contador++
//         } else if (parar == 2) {
//             continuar = false
//         }
//     }
// }

// function GerirProjeto(NomeParametro, ValorParametro, TipoParametro) { 
//     NomeParametro = prompt("Insira o nome do projeto")
//     for (let index = 0; index < nome.length; index++) {
//         if (NomeParametro == nome[index]) {
//             ValorParametro = parseFloat(prompt("Insira o valor"))
//             TipoParametro = prompt("Como deseja definir o valor? \nR - Receita \nD - Despesa")
//             while(TipoParametro != "R" && TipoParametro != "D"){
//                 TipoParametro = prompt("Insira uma opção válida: \nR - Receita \nD - Despesa")
//             }
//             if (TipoParametro == "R") {
//                 orcamento[index] = orcamento[index] + ValorParametro
//             } else if (TipoParametro == "D" && ValorParametro <= orcamento[index]) {
//                 orcamento[index] = orcamento[index] - ValorParametro
//             } else if (TipoParametro == "D" && ValorParametro > orcamento[index]) {
//                 console.log("Não foi possível fazer o reajuste.")
//             }
//         }
//     }
// }

// Ex 2:

// VerificarNumero(6)

// function VerificarNumero(numeroParametro){
//     let verificador = parseInt(0)
//     for(let index = 1; index < numeroParametro; index++){
//         if(numeroParametro % index == 0){
//             verificador = verificador + index
//         }
//     }
//     if(verificador == numeroParametro){
//         return true
//     }else{
//         return false
//     }
// }

// Ex 3:

// let salario = [1000, 3000, 7000]
// let filhos = [3,2,4]

// console.log("A média salarial é de R$"+CalcularMediaSalario().toFixed(2)+ ".")
// console.log("A média de filhos é de aproximadamente "+CalcularMediaFilhos().toFixed(0)+ " filhos.")
// console.log("O maior salário é de R$" +MostrarMaiorSalario().toFixed(2)+ ".")
// console.log("Aproximadamente " +MostrarPorcentagem().toFixed(0)+ "% da população tem o salário de até R$1500,00.")

// function MostrarPorcentagem(){
//     let Porcentagem = 0
//     for(let index = 0; index < salario.length; index++){
//         if(salario[index] < 1500){
//             Porcentagem++
//         }
//    }
//     Porcentagem = (Porcentagem / salario.length) * 100
//     return Porcentagem
// }

// function MostrarMaiorSalario(){
//     let Maior = 0
//     for(let index = 0; index < salario.length; index++){
//         if(salario[index] > Maior){
//             Maior = salario[index]
//         }
//     }
//     return Maior
// }

// function CalcularMediaFilhos(){
//     let MediaFilhos = 0
//     for(let index = 0; index < filhos.length; index++){
//         MediaFilhos = MediaFilhos + filhos[index]
//     }
//     MediaFilhos = MediaFilhos / filhos.length
//     return MediaFilhos 
// }

// function CalcularMediaSalario(){
//     let MediaSalario = 0
//     for(let index = 0; index < salario.length; index++){
//         MediaSalario = MediaSalario + salario[index]
//     }
//     MediaSalario = MediaSalario / salario.length
//     return MediaSalario 
// }

// function CorrerArray(){
//     for(let index = 0; index < salario.length; index++){

//     }
// }

// Ex 4:

console.log(CalcularMediaNotas(5,6,7,"P"))

function CalcularMediaNotas(Nota1,Nota2,Nota3,TipoParametro){
    let media = 0
    if(TipoParametro == "A"){
        media = (Nota1 + Nota2 + Nota3) / 3
        return media
    }else if(TipoParametro == "P"){
        media = (Nota1 * 0.5) + (Nota2 * 0.3) + (Nota3 * 0.2)
        return media 
    }
}