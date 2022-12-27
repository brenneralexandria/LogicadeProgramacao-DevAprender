function verificarEntrada() {
    nomeConvidado = document.getElementById('digiteSeuNome').value;
    convidadosRobert = ['Buda', 'Brenner', 'Victor', 'Saulo', 'Nilso', 'Ivan']

    if (convidadosRobert.includes(nomeConvidado)) {
        document.getElementById('permissaoDeEntrada').innerText = 'Você está na lista. LIBERADO!'
    }else {
        document.getElementById('permissaoDeEntrada').innerText = 'Você não está na lista. VERIFICAR!'
    }
}