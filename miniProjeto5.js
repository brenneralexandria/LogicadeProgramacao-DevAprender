// Par ou impar 

/* Receber um valor e informar se ele é par ou impar */


// Programa para ler qualquer número se é par ou impar
/* exibirTipo(11);

function exibirTipo(tipo) {
    if(tipo % 2 === 0)
        console.log(tipo + ': Par');
     else {
        console.log(tipo + ': Impar');
    }
}*/

// Ler se é par ou impar em loop
exibirTipo(11);

function exibirTipo(tipo) {
    for(let i = 0; i <= tipo; i++)
        if(i % 2 === 0)
            console.log(i + ': Par');
        else {
            console.log(i + ': Impar');
        }
}