//Requisito II: Crie um arquivo Javascript para executar algumas lógicas de programação:

//Defina valores para as variáveis: nome do produto, preço do produto, desconto do produto e desconto válido (booleano);
let nomeDoProduto = "mesa";
let precoDoProduto = 3000;
let descontoDoProduto = precoDoProduto*(20/100);
let descontoValido = true;

console.log([nomeDoProduto, precoDoProduto, descontoDoProduto, descontoValido]);

//Caso desconto válido seja verdadeiro. Realize o cálculo do desconto e salve em uma nova variável: preço final. Caso contrário, apenas repasse o valor do produto para variável de preço final;
let precoFinal;
if (descontoValido) {
  precoFinal=precoDoProduto-descontoDoProduto;
} else {
  precoFinal=precoDoProduto;
}

console.log(precoFinal);

//Faça a seguinte verificação: Se o preço final do produto for maior que 1000, reduza 50 reais. Caso contrário, apenas mostre uma mensagem na tela com o valor do preço final;
if (precoFinal > 1000) {
  precoFinal=precoFinal - 50;
} else {
  precoFinal=precoFinal;
}

console.log(precoFinal);

 //Crie um array de demandas com os valores: 10, 2, 1, 30, 5. Cada item no array representa a demanda de um cliente diferente. Por exemplo o primeiro cliente está solicitando 10 produtos.
 let demandas = [10, 2, 1, 30, 5];
 console.log(demandas);

 //Para cada demanda no array calcule quanto cada cliente deverá pagar e mostre a mensagem no formato: "O cliente 1 deverá pagar: R$ 585". Salve o total de cada cliente em um novo array que deverá começar vazio.
 let demandasResultado = [];
 for(let i = 0; i < demandas.length; i++) {
  demandasResultado.push("O cliente" + i "deverá pagar: R$" 585 ")

 }
