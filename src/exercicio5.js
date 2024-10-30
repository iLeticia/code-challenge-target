const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Insira a string a ser invertida: ", (original) => {
    const caracteres = original.split('');
    const tamanho = caracteres.length;
    const invertido = new Array(tamanho);

    for (let i = 0; i < tamanho; i++) {
        invertido[i] = caracteres[tamanho - i - 1];
    }

    const resultadoQ5 = invertido.join('');
    console.log(resultadoQ5);
    readline.close();
});

