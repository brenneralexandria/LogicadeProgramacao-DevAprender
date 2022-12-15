// Criar um método para ler propriedades de um objeto.
// E exibir somente as propriedades do tipo string que estão nesse objeto.

const filme = {
    título: 'Pantera Negra',
    ano: 2018,
    diretor: 'Tibala',
    personagem: 'Black Panter'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for(prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}