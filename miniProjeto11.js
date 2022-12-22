// Criar um objeto para colocar endereço que contem:

/* 
Rua
cidade
CEP
exibirEndereço(endereço) */ 

let endereço = {
    rua: 'Doninha',
    Cidade: 'Betim',
    CEP: 36676660
};

function exibirEndereço(endereço) {
    for(let chave in endereço)
        console.log(chave, endereço[chave]);
}

exibirEndereço(endereço);