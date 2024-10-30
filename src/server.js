const express = require('express');
const app = express();
const PORT = 3000;

// Rota para o Exercício 1
app.get('/exercicio1', (req, res) => {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    res.send(`Resultado do Exercício 1: ${SOMA}`);
});

// Rota para o Exercício 2 - Verificação na Sequência de Fibonacci
app.get('/exercicio2/:numero', (req, res) => {
    const numero = parseInt(req.params.numero);
    let a = 0, b = 1, pertence = false;

    while (a <= numero) {
        if (a === numero) {
            pertence = true;
            break;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }

    res.send(`O número ${numero} ${pertence ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);
});

// Rota para o Exercício 3 - Análise de Faturamento
app.get('/exercicio3', (req, res) => {
    // Dados de exemplo, substitua pelo seu JSON
    const faturamentoDiario = [ /* insira os valores de faturamento aqui */ ];

    // Lógica para calcular menor, maior e dias acima da média
    const faturamentoValido = faturamentoDiario.filter(f => f > 0);
    const menor = Math.min(...faturamentoValido);
    const maior = Math.max(...faturamentoValido);
    const media = faturamentoValido.reduce((acc, val) => acc + val, 0) / faturamentoValido.length;
    const diasAcimaMedia = faturamentoValido.filter(val => val > media).length;

    res.send(`Menor: ${menor}, Maior: ${maior}, Dias acima da média: ${diasAcimaMedia}`);
});

// Rota para o Exercício 4 - Percentual de Faturamento por Estado
app.get('/exercicio4', (req, res) => {
    const faturamentoEstados = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    };

    const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);
    const percentual = Object.fromEntries(
        Object.entries(faturamentoEstados).map(([estado, valor]) => [estado, ((valor / total) * 100).toFixed(2)])
    );

    res.json(percentual);
});

// Rota para o Exercício 5 - Inversão de String
app.get('/exercicio5/:texto', (req, res) => {
    const texto = req.params.texto;
    let invertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    res.send(`Texto invertido: ${invertido}`);
});

// Inicia o Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
