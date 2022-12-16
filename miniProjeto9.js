// contador de asteriscos

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    /* let padrao = '';
    for(let linha = 1; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao);
    } */
    for(let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for(let i = 1; i <= linhas; i++) {
            padrao += '*';
        }
        console.log(padrao);        
    }
}