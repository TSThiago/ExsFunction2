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



VerificarNumero(6)

function VerificarNumero(numeroParametro){
    let verificador = parseInt(0)
    for(let index = 1; index < numeroParametro; index++){
        if(numeroParametro % index == 0){
            verificador = verificador + index
        }
    }
    if(verificador == numeroParametro){
        return true
    }else{
        return false
    }
}

