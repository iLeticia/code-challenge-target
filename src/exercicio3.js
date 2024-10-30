const faturamentoMensal = [
    { "dia": 1, "valor": 100 },
    { "dia": 2, "valor": 200 },
    { "dia": 3, "valor": 0 },
    // outros valores...
  ];
  
  function calcularEstatisticas(faturamento) {
    const diasComFaturamento = faturamento.filter(d => d.valor > 0);
    const menorValor = Math.min(...diasComFaturamento.map(d => d.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(d => d.valor));
    
    const mediaMensal = diasComFaturamento.reduce((sum, d) => sum + d.valor, 0) / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(d => d.valor > mediaMensal).length;

    return { menorValor, maiorValor, diasAcimaDaMedia };
  }
  
  const estatisticas = calcularEstatisticas(faturamentoMensal);
  console.log("Menor valor:", estatisticas.menorValor);
  console.log("Maior valor:", estatisticas.maiorValor);
  console.log("Dias com faturamento acima da média:", estatisticas.diasAcimaDaMedia);
  