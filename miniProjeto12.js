/* Criar um objeto de postagem de blog que vai conter as seguintes propriedades
titulo
mensagem
autor
visualizações
comentários
    (autor, mensagem)
estaAoVivo */

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    vizualizações: 10,
    comentarios: [
        { autor: 'a', mensagem: 'b' },
        { autor: 'a', mensagem: 'b' }
    ],
    estaAoVivo: true
};

console.log(postagem);