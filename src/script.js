function calculateSum() {
  let INDICE = 13, SOMA = 0, K = 0;
  while (K < INDICE) {
      K += 1;
      SOMA += K;
  }
  document.querySelector('#exercise1 .result').innerText = `Resultado do Exercício 1: ${SOMA}`;
}

function checkFibonacci() {
  const number = parseInt(document.getElementById('fiboInput').value);
  let a = 0, b = 1, fibo = 0;

  while (fibo < number) {
      fibo = a + b;
      a = b;
      b = fibo;
  }

  const resultText = (fibo === number) ? `O número ${number} pertence à sequência de Fibonacci.` : `O número ${number} não pertence à sequência de Fibonacci.`;
  document.querySelector('#exercise2 .result').innerText = resultText;
}

function calculateRevenueStats() {
  const dailyRevenue = [1200, 1400, 1500, 0, 1800, 2000, 1600, 0]; // Exemplo
  const filteredRevenue = dailyRevenue.filter(rev => rev > 0);
  
  const minRevenue = Math.min(...filteredRevenue);
  const maxRevenue = Math.max(...filteredRevenue);
  const averageRevenue = filteredRevenue.reduce((acc, val) => acc + val, 0) / filteredRevenue.length;

  const daysAboveAverage = filteredRevenue.filter(rev => rev > averageRevenue).length;

  const resultText = `Menor: R$${minRevenue.toFixed(2)}, Maior: R$${maxRevenue.toFixed(2)}, Dias acima da média: ${daysAboveAverage}`;
  document.querySelector('#exercise3 .result').innerText = resultText;
}

function calculatePercentages() {
  const revenues = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Others: 19849.53
  };

  const totalRevenue = Object.values(revenues).reduce((acc, val) => acc + val, 0);
  let resultText = "Percentuais por Estado:\n";

  for (const state in revenues) {
      const percentage = ((revenues[state] / totalRevenue) * 100).toFixed(2);
      resultText += `${state}: ${percentage}%\n`;
  }

  document.querySelector('#exercise4 .result').innerText = resultText;
}

function reverseString() {
  const str = document.getElementById('stringInput').value;
  const reversedStr = str.split('').reverse().join('');
  document.querySelector('#exercise5 .result').innerText = `String invertida: ${reversedStr}`;
}
