// Criar uma função para somar todos os multiplos de 3 e 5

soma(6);
function soma(limite) {
    let number3 = 0;
    let number4 = 0;
    
    for(let i = 0; i <= limite; i++) {
        if(i % 3 === 0)
            number3 += i;
        if(i % 5 === 0)
            number4 += i;    
    }
    console.log(number3 + number4);
}