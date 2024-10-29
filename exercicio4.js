const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const total = Object.values(faturamentoPorEstado).reduce((acc, val) => acc + val, 0);
  
  const percentualPorEstado = Object.entries(faturamentoPorEstado).map(([estado, valor]) => {
    const percentual = (valor / total) * 100;
    return { estado, percentual: percentual.toFixed(2) + '%' };
  });
  
  console.log("Percentual de faturamento por estado:", percentualPorEstado);
  