//Estrutura de uma função
/*
function NomedaFuncao(valor1,valor2){
    return valor1 * Valor2
}
*/

//Funcoes
function AddNums(num1 = 2, num2 = 5) {
  return num1 + num2;
  }

//*console.log(AddNums());
let x = AddNums(10, 11);
console.log(x);
console.clear();

// Criando Arrow Function
const hello = (primeiro = 2, segundo = 2) => {
  return primeiro * segundo;
}

// retornar o resultado da funcao
console.log(hello());

const somaAddNums = () => {
    return num1 + num2;
} 

//Criando Objetos
const aluno = {
    primeiroNome: 'Matheus',
    segundoNome: 'lost',
    idade: '19', 
}
console.clear();
const boasVindas = () => {
alert('Bem vindo a nossa página otario')
console.log('Bem vindo a nossa página otario')
}

function eventClick() {
    console.log('Você clicou aqui otario')
}