// FizzBuzz - Comparar valores e retornar o que teve de entrada.

/* Atividade - Se for divisivel por 3 retornar FIZZ, caso for divisivel por 5 retornar BUZZ, se não for divisivel nem por 3 e 5
retornar o número da entrada, e se não for um número retornar "não é um número" */

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}