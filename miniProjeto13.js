// Criar um array de objeto de faixa de preço para que possa ser usado em um site igual o mercado livre
// Deve ter faixa de preço, tooltip, minimo e maximo.

// Primeira forma de fazer
/* let faixa = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 até R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'de R$1000 até R$700000', minimo: 1000, maximo: 700000},
]

console.log(faixa); */

// Segunda forma de fazer (FACTORY FUNCTION)

/* function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo,
    }
}

let faixas2 = [
    criaFaixaPreco('a', 0, 1000),
    criaFaixaPreco('b', 1000, 10000),
    criaFaixaPreco('c', 10000, 100000),
]

console.log(faixas2); */

// Terceira forma de fazer (CONSTRUCTOR FUNCTION)

function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip;
    this.minimo = minimo;
    this.maximo = maximo
}

let faixa3 = [
    new FaixaPreco('a', 0, 700),
    new FaixaPreco('b', 700, 1500),
    new FaixaPreco('c', 1500, 30000),
];

console.log(faixa3);