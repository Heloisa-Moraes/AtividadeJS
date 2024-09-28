function calcular() {
    let num = document.getElementById('num').value;
    let resultadoTabela = document.getElementById('resultado').getElementsByTagName('tbody')[0];
    
    // Limpa resultados anteriores
    resultadoTabela.innerHTML = '';

    // Exibe a tabela
    document.getElementById('resultado').style.display = 'table';

    for (let i = 1; i <= 10; i++) {
        // Cria uma nova linha
        let novaLinha = resultadoTabela.insertRow();
        
        // Cria as células
        let celulaMultiplicacao = novaLinha.insertCell(0);
        let celulaResultado = novaLinha.insertCell(1);
        
        // Preenche as células
        celulaMultiplicacao.textContent = `${num} x ${i}`;
        celulaResultado.textContent = num * i;
    }
}
