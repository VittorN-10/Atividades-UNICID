function salvarDados(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}

function carregarDados(chave) {
    const dados = localStorage.getItem(chave);

    return dados ? JSON.parse(dados) : null;
}