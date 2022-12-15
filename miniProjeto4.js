// Medidor de velocidade

/* Definir a velocidade máxima de 70km/h e retorna um ok.
A cada 5km a cima do limite ganha um ponto na carteira.
Caso os pontos ganhos forem maior que 12 -> "Carteira suspendida" */

verificarVelocidade(145);

function verificarVelocidade(velocidade) {
    const velocidadeMax = 70;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMax)
        console.log('Velocidade ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMax) / kmPorPonto));
        if (pontos >= 12)
            console.log('Você perdeu sua carteira de motorista');
        else 
            console.log('Você recebeu ' + pontos + ' pontos');    
    }    
}