// Criar um objeto postagem - Constructor function
// título, mensagem, autor, visualizações, comentários, estaAoVivo.

// Quando se trabalha com constructor function o nome sempre deve começar com letra maiuscula
function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacao = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('DragonBall', 'ep 1', 'Uzumaki')
console.log(postagem);