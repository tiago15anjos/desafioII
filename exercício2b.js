function rendimento() {
    let capitalAplicado = parseFloat(prompt("Por favor, informe o valor depositado na poupança:"));
    let tempoDeAplicacao = parseInt(prompt("Informe a quantidade de meses da aplicação:"));
    let taxaDeJuros; 

    while (isNaN(capitalAplicado) || capitalAplicado < 0 || isNaN(tempoDeAplicacao) || tempoDeAplicacao < 0) {
        alert("Valor informado inválido! Por favor, informe o valor depositado na poupança e o tempo em meses corretamente.");
        capitalAplicado = parseFloat(prompt("Valor informado inválido! Por favor, informe novamente o valor depositado na poupança:"));
        tempoDeAplicacao = parseInt(prompt("Informe novamente a quantidade de meses da aplicação:"));
    }

    if (capitalAplicado >= 999.99 && capitalAplicado <= 10000) {
        taxaDeJuros = 2 / 100;  // Taxa de juros de 2%
    } else {
        taxaDeJuros = 0.6022 / 100;  // Taxa de juros padrão de 0,6022% ao mês
    }

    let valorFinal = capitalAplicado * Math.pow(1 + taxaDeJuros, tempoDeAplicacao);
    let valorRendimento = valorFinal - capitalAplicado;

    alert(`A quantia de R$${capitalAplicado.toFixed(2)} aplicada em ${tempoDeAplicacao} meses, rendeu R$${valorRendimento.toFixed(2)} a juros de ${(taxaDeJuros * 100).toFixed(4)}%.`);
}

rendimento();
